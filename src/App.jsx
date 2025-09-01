import { useState } from "react";
import "./App.css";
import "./header.css"
import { Footer } from "./components/footer";
import Profil from "./components/Profile";
import Header from "./components/Header";
import KartuSiswa from "./components/KartuSiswa";
import HaloButton from "./components/HaloButton";

function App() {
  // Deklarasi Variabel dan Value useState
  const [count, setCount] = useState(0);
  // Deklarasi Waktu Kelompok 13
  let time  = new Date().toLocaleTimeString()
  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)




  return (
    <>
    {/* Kelompok 1 Header Navbar */}
      <Header />
      <div className="main-content">
        <h2>Selamat Datang di Website Kami!</h2>
        <p>Ini adalah halaman beranda.</p>
      </div>

    {/* Kelompok 4 Halo button alert */}
      <HaloButton />

      {/* Kelompok 3 Biodata Siswa */}
      <div>
        <h2>Profil Siswa</h2>
        <Profil />
      </div>

      {/* Kelompok 11 Kartu Siswa */}
          <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',    
        // minHeight: '100vh',       
        // width: '100vw',          
        textAlign: 'center'
      }}
    >
      <br />
      <h2 style={{ marginBottom: '20px' }}>Daftar Siswa</h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        <KartuSiswa nama="Revano Satya" jurusan="Sistem Informasi Jaringan Aplikasi" />
        <KartuSiswa nama="Aditya Wiratama" jurusan="Sistem Informasi Jaringan Aplikasi" />
      </div>
    </div>

      {/* Kelompok 13, Jam */}
      <h2>Waktu Sekarang</h2>
      <h1>{ctime}</h1>
      <br />
      {/* Kelompok 7 Counter */}
      <h2>Komponen Counter dengan tombol tambah (+) dan kurang (−), menggunakan state</h2>
      <div className="card">
        {/* Menampilkan Jumlah Klik count */}
        <h3>Jumlah Klik: {count}</h3>
      </div>
      {/* Card Container Utama */}
      <div className="card-container">
        {/* subContainer card */}
        <div className="card">
          {/* Logika setCount count + 1 untuk menambah value state */}
          <button onClick={() => setCount((count) => count + 1)}>
            Klik untuk Menambah (+)
          </button>
        </div>
        <div className="card">
          {/* Logika setCount count - 1 untuk mengurangi value state */}
          <button onClick={() => setCount((count) => count - 1)}>
            Klik untuk mengurangi (-)
          </button>
        </div>
        <div className="card">
          {/* Logika setCount(0) untuk mereset value state */}
          <button onClick={() => setCount(0)}>Klik untuk mereset</button>
        </div>
      </div>
      {/* Footer kelompok 2 */}
      <Footer />
    </>
  );
}

export default App;