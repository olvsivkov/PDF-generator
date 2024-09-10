import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Component({ name, includeName }) {
  return (
    <div id="pdf-content">
      <h1>PDF Content</h1>
      <p>Name: {name}</p>
      {includeName && <p>Include Name: Yes</p>}
      {!includeName && <p></p>}
    </div>
  );
}

function GetPDFfile() {
  const [name, setName] = useState('');
  const [includeName, setIncludeName] = useState(false);

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
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Include Name:
          <input
            type="checkbox"
            checked={includeName}
            onChange={() => setIncludeName(!includeName)}
          />
        </label>
        <br />
        <button type="button" onClick={generatePDF}>
          Generate PDF
        </button>
      </form>
      <Component name={name} includeName={includeName} />
    </div>
  );
}

export default GetPDFfile;