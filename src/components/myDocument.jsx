import React, { useState } from 'react';
import PDFfile from './pdfFile';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InputForm from './inputForm';
import GetRegions from './getRegion';

function GetPDFfile() {
  const [name, setName] = useState('');
  const [includeName, setIncludeName] = useState(false);
  const [activeRegion, setActiveRegion] = useState(false)

  const generatePDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('my-pdf.pdf');
    });
  };

  return (
    <div>
      <GetRegions
        setActiveRegion={setActiveRegion}
      /> 
      {activeRegion ? <InputForm 
        setName={setName} 
        setIncludeName={setIncludeName} 
        name={name} 
        includeName={includeName}
      /> : false}

      <button type="button" 
        onClick={generatePDF}
      >
        Generate PDF
      </button>
     
      <PDFfile 
        name={name} 
        includeName={includeName}
      />
    </div>
  );
}

export default GetPDFfile;