import { useEffect, useState } from "react";
import "./App.css";
import "./header.css";
import { Footer } from "./components/Footer";
import Profil from "./components/Profile";
import Header from "./components/Header";
import KartuSiswa from "./components/KartuSiswa";
import HaloButton from "./components/HaloButton";
import InputNama from "./components/InputNama";
import CardProduk from "./components/CardProduk";

function App() {
  // Deklarasi Variabel dan Value useState
  const [count, setCount] = useState(0);
  // Deklarasi Waktu Kelompok 13 (perbaikan interval)
  const [ctime, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);




  return (
    <>
    {/* Kelompok 1 Header Navbar */}
      <Header />
      <div className="main-content section">
        <h2>Selamat Datang di Website Kami!</h2>
        <p>Ini adalah halaman beranda.</p>
      </div>

    {/* Kelompok 4 Halo button alert */}
      <HaloButton />

      {/* Kelompok 3 Biodata Siswa */}
      <div className="section">
        <h2>Profil Siswa</h2>
        <Profil />
      </div>

      {/* Kelompok 11 Kartu Siswa */}
      <div className="section students">
        <h2>Daftar Siswa</h2>
        <div className="students-grid">
          <KartuSiswa nama="Revano Satya" jurusan="Sistem Informasi Jaringan Aplikasi" />
          <KartuSiswa nama="Aditya Wiratama" jurusan="Sistem Informasi Jaringan Aplikasi" />
        </div>
      </div>

      {/* Kelompok 13, Jam */}
      <div className="section center">
        <h2>Waktu Sekarang</h2>
        <h1>{ctime}</h1>
      </div>
      {/* Kelompok 7 Counter */}
      <div className="section center">
        <h2>Komponen Counter</h2>
        <div className="card">
          <h3>Jumlah Klik: {count}</h3>
        </div>
      </div>
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
      {/* InputNama */}
      <div className="section">
        <InputNama />
      </div>
      <CardProduk
        name="Produk A"
        price={100}
        description="Deskripsi singkat tentang Produk A."
      />
      {/* Footer kelompok 2 */}
      <Footer />
    </>
  );
}

export default App;