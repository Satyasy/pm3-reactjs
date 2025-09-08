import { useState } from 'react'

function InputNama() {
  const [nama, setNama] = useState('')

  return (
    <div className="container">
      <h1 className="title">Input Nama</h1>
      <p className="subtitle">Masukkan nama Anda di bawah ini</p>
      
      <div className="input-group">
        <input 
          className="input-field"
          type="text"
          placeholder="Masukkan nama" 
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      
      {nama && (
        <div className="greeting">
          Halo, <strong>{nama}</strong>! 👋
        </div>
      )}
    </div>
  )
}

export default InputNama
