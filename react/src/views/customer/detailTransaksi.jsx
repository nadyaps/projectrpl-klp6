import React from 'react';
import { useState, useEffect } from 'react';
import axiosClient from '../../axios';
import { useParams } from 'react-router-dom';

// Popup component for "E-Wallet"
const EWalletPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Instruksi Pembayaran E-wallet</h2>
        <h1 className="text-lg mb-4">Silakan lakukan pembayaran melalui E-wallet bank sesuai dengan informasi dibawah ini.</h1>
        <h1 className="text-lg mb-4">- OVO: 08092808924</h1>
        <h1 className="text-lg mb-4">- DANA: 08092808924</h1>
        <h1 className="text-lg mb-4">- GOPAY: 08092808924</h1>
        <button onClick={onClose} className="mt-3 bg-pink-500 text-white text-lg px-4 py-1 rounded hover:bg-pink-600">Tutup</button>
      </div>
    </div>
  );
};

// Popup component for "Transfer Bank"
const TransferBankPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Instruksi Pembayaran Transfer Bank</h2>
        <h1 className="text-lg mb-4">Silakan lakukan pembayaran melalui transfer bank sesuai dengan informasi dibawah ini.</h1>
        <h1 className="text-lg mb-4">Bank: BCA</h1>
        <h1 className="text-lg mb-4">No. Rekening: 08092808924</h1>
        <h1 className="text-lg mb-4">Atas Nama: PT. Layanan</h1>
        <button onClick={onClose} className="mt-3 bg-pink-500 text-white text-lg px-4 py-1 rounded hover:bg-pink-600">Tutup</button>
      </div>
    </div>
  );
};

export default function DetailTransaksi() {
  const { id } = useParams(); 
  const [pemesananItem, setPemesananItem] = useState(JSON.parse(localStorage.getItem('pemesananItem')) || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get(`/detailtransaksi/${id}`)
      console.log('Response data pemesanan:', response.data); // Debugging: log response data pemesanan
      // Assign response data to state
      setPemesananItem(response.data.data || []); // Ensure pemesanan is an array
      localStorage.setItem('pemesananItem', JSON.stringify(response.data.data || {}));
    } catch (error) {
      setError(error.message); // Set error message
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Run hook useEffect
  useEffect(() => {
    fetchData();
  }, [id]);

  const [popupType, setPopupType] = useState(null);


  const handleEWallet = () => {
    setPopupType('eWallet');
  };

  const handleTransferBank = () => {
    setPopupType('transferBank');
  };

  const handleClosePopup = () => {
    setPopupType(null);
  };
  return (
    <div className="">
      {popupType === 'eWallet' && <EWalletPopup onClose={handleClosePopup} />}
      {popupType === 'transferBank' && <TransferBankPopup onClose={handleClosePopup} />}
      
    <div className="min-h-screen w-full mt-24 px-10 md:px-16 py-16 bg-white">
      <div className="container mx-auto py-8 px-8">
        <h1 className="text-center font-['BebasNeue'] text-3xl md:text-4xl mb-8">DETAIL TRANSAKSI</h1>
        <div className="flex justify-center mb-10">
          <img 
            src={pemesananItem.layanan.photo}
            alt={pemesananItem.layanan.nama_layanan}
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
          <div className="flex justify-between items-center border-b pb-2 mb-2 mt-2">
            <div className="flex items-center">
              <span className="font-['BebasNeue'] font-semibold text-xl md:text-2xl pt-1">{pemesananItem.created_at}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-xl md:text-2xl">Nama</p>
              <p className="font-['BebasNeue'] text-xl md:text-2xl">{pemesananItem.nama_pemesan}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Nama Layanan</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl">{pemesananItem.layanan.nama_layanan}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Jenis Layanan</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl">{pemesananItem.layanan.price_type}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Jumlah Orang</p>
              <p className="font-['BebasNeue'] text-lg  md:text-2xl">{pemesananItem.jumlah_orang}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Tanggal Mulai</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl">{pemesananItem.tanggal_mulai}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Waktu Mulai</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl">{pemesananItem.tanggal_berakhir}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Status</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl bg-yellow-300 px-3 py-1 rounded-md">{pemesananItem.status}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['BebasNeue'] font-semibold text-lg md:text-2xl">Total Belanja</p>
              <p className="font-['BebasNeue'] font-semibold text-lg md:text-2xl">Rp {pemesananItem.harga.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-['BebasNeue'] text-lg md:text-2xl">Metode Pembayaran</p>
              <p className="font-['BebasNeue'] text-lg md:text-2xl">{pemesananItem.metode_pembayaran}</p>
            </div>
            <div className="flex justify-end items-end mb-2">

            {pemesananItem.metode_pembayaran === "e-wallet" && (
              <div className="flex justify-center mt-8">
                <button onClick={handleEWallet} className=" bg-pink-500 text-white text-lg px-4 py-2 rounded hover:bg-pink-600">Instruksi Pembayaran</button>
              </div>
            )}
            {pemesananItem.metode_pembayaran === "transfer bank" && (
              <div className="flex justify-center mt-8">
                <button onClick={handleTransferBank} className=" bg-pink-500 text-white text-lg px-4 py-2 rounded hover:bg-pink-600">Instruksi Pembayaran</button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


