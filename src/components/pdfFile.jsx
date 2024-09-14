import React from 'react';

function PDFfile({ name, includeName }) {
  
    return (
      <div id="pdf-content">
        <h1>Параметры сделки:</h1>
        <p>ФИО: {name}</p>
        {includeName ? <p>ЭР 9 900 р</p> : false}
      </div>
    );
}

export default PDFfile