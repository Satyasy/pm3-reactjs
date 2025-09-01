import React from "react";

export default function Profil() {
   return (
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
         {/* Kartu Profil Pertama */}
         <div style={{
            maxWidth: "300px",
            padding: "10px",
            border: "3px solid #878787ff",
            borderRadius: "10px",
            textAlign: "center",
         }}>
            <img
               src="/dummy-profile.png"
               alt="Foto Siswa"
               style={{ borderRadius: "50%", width: "120px", height: "120px" }}
            />
            <h2 style={{ marginTop: "15px", color: "white" }}>Revano</h2>
            <p style={{ color: "white", fontWeight: "600" }}>
               Siswa SMK Telkom Sidoarjo, sedang belajar React.js.
            </p>
         </div>
         {/* Kartu Profil Kedua */}
         <div style={{
            maxWidth: "300px",
            padding: "10px",
            border: "3px solid #878787ff",
            borderRadius: "10px",
            textAlign: "center"
         }}>
            <img
               src="/dummy-profile.png"
               alt="Foto Siswa"
               style={{ borderRadius: "50%", width: "120px", height: "120px" }}
            />
            <h2 style={{ marginTop: "15px", color: "white" }}>Adit</h2>
            <p style={{ color: "white", fontWeight: "600" }}>
               Siswa SMK Telkom Sidoarjo, sedang belajar React.js.
            </p>
         </div>
      </div>
   );

}