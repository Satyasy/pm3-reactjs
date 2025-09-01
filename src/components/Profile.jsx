// src/Profil.jsx
import React from "react";

export default function Profil() {
  return (
    <div style={{
      maxWidth: "300px",
      margin: "20px auto",
      padding: "10px",
      border: "3px solid #878787ff",
      borderRadius: "10px",
      textAlign: "center",
    }}>
      <img
        src="\public\Library books.jpg"
        alt="Foto Siswa"
        style={{ borderRadius: "50%", width: "120px", height: "120px" }}
      />
      <h2 style={{ marginTop: "15px", color: "black" }}>Avila</h2>
      <h2 style={{ marginTop: "15px", color: "black" }}>Viska</h2>
      <p style={{ color: "black", fontWeight: "600" }}>
        Kami seorang siswa SMK Telkom SDA dan sedang belajar React.js.
        Dan sedang membuat sebuah project react profil siswa
      </p>
    </div>
  );
}
