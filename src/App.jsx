import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import Profil from "./components/Profile";

function App() {
  // Deklarasi Variabel dan Value useState
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
          <div>
      <h1>Profil Siswa</h1>
      <Profil />
    </div>
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
      <Footer />
    </>
  );
}

export default App;