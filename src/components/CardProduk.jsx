import React from 'react';

const CardProduk = ({ name, price, description }) => {
  return (
    <>
      <style>
        {`
          .card-produk {
            background: #fff;
            border-radius: 16px;
            padding: 24px 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 1.5px 4px rgba(0, 0, 0, 0.06);
            margin: 24px auto;
            max-width: 340px;
            color: #222;
            transition: transform 0.18s, box-shadow 0.18s;
            border: 1px solid #e5e7eb;
            font-family: 'Segoe UI', 'Arial', sans-serif;
          }
          
          .card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08);
          }
          
          .card-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 12px;
            color: #1e293b;
            letter-spacing: 0.5px;
          }
          
          .card-description {
            font-size: 1rem;
            color: #475569;
            margin-bottom: 16px;
          }
          
          .card-price {
            font-size: 1.1rem;
            font-weight: 500;
            color: #2563eb;
            margin-bottom: 8px;
          }
        `}
      </style>
      <div className="card-produk">
        <h2 className="card-title">{name}</h2>
        <p className="card-price">Price: ${price}</p>
        <p className="card-description">{description}</p>
      </div>
    </>
  );
};

export default CardProduk;
