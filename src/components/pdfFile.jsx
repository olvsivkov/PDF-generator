import React from 'react';

function PDFfile({ name, includeName, PDFfileInfo }) {
  
    return (
      <div id="pdf-content">
        <h1>Параметры сделки:</h1>
        <h4>{PDFfileInfo}</h4>
        <p>ФИО: {name}</p>
        {includeName ? <p>ЭР 9 900 р</p> : false}
      </div>
    );
}

export default PDFfile