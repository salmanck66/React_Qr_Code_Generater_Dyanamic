
import './App.css'
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
    <h1>QR Code Generater</h1>
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text for QR code"
      />
      <div className="qr-code-container">
        <QRCode value={inputValue} />
      </div>
    </div>
    </>
  );
}

export default QRCodeGenerator;


