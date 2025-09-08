import React from "react";

function KartuSiswa(props) {
  return (
    <div style={{
      backgroundColor: '#1f1f1f',  // 🟤 Gelap tapi tidak hitam pekat
      color: '#fff',               // 🔠 Teks putih biar kontras
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '16px',      
      margin: '30px',
      width: '250px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    }}>
      <h2>{props.nama}</h2>
      <p>Jurusan: {props.jurusan}</p>
    </div>
  );
}

export default KartuSiswa;

