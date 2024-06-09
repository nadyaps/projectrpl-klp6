import React, { useState, useEffect } from 'react';
import { FaWifi, FaUsers, FaChalkboardTeacher, FaTv } from 'react-icons/fa'; 
import axiosClient from '../../axios';
import { useParams } from 'react-router-dom';

export default function Pemesanan() {
  const { id } = useParams();
  const [layananItem, setLayananItem] = useState({});
  const [nama_pemesan, setNama_pemesan] = useState('');
  const [tanggal_mulai, setTanggal_mulai] = useState('');
  const [tanggal_selesai, setTanggal_selesai] = useState('');
  const [jumlah_orang, setJumlah_orang] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosClient.get(`/layanan/${id}`)
      .then(response => {
        console.log(response.data);  // Log response untuk memastikan data yang diterima
        setLayananItem(response.data.data);
      })
      .catch(error => console.error('There was an error fetching the article!', error));
  }, [id]);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    const bookingData = { nama_pemesan, tanggal_mulai, tanggal_selesai, jumlah_orang };
    try {
      await axiosClient.post('/pemesanan', bookingData);
      console.log('Booking created:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error);
    } finally {
      setLoading(false);
    }
  };

//   const onSubmit = (ev) => {
//   ev.preventDefault();
//   const bookingData = { nama_pemesan, tanggal_mulai, tanggal_selesai, jumlah_orang };
//   try {
//     axiosClient.post('/pemesanan', bookingData);
//     console.log('Booking created:', response.data);
//   } catch (error) {
//     console.error('Error creating booking:', error);
//   }
// }

  return (
    <div className="w-full bg-white mt-24 px-10 md:px-16 py-16">
      <h1 className="text-center font-['BebasNeue'] text-4xl md:3xl mb-8">PESAN LAYANAN</h1>
      <p className="font-['BebasNeue'] text-xl md:lg mb-4 text-center">
        Dapatkan layanan yang Anda butuhkan untuk penggunaan pribadi, membuat klien kagum, mengadakan lokakarya yang berkesan, atau menyampaikan presentasi penjualan yang sukses.
      </p>
      <form onSubmit={onSubmit} >
        <div className="font-['BebasNeue'] text-md mb-4">
          <input 
            type="text" 
            placeholder="Masukkan nama anda" 
            value={nama_pemesan} 
            onChange={(ev) => setNama_pemesan(ev.target.value)}
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="relative">
              <label className="font-['BebasNeue'] text-md block mb-2">Jenis Layanan</label>
              <div className="font-['BebasNeue'] text-md mb-4">
                  <input 
                    value= {layananItem.nama_layanan} readOnly
                    className="w-full p-2 border border-gray-300 rounded" 
                  />
              </div>
            </div>
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Jumlah orang*</label>
            <div className="font-['BebasNeue'] text-md mb-4">
                <input 
                  type="number" 
                  placeholder="Masukkan jumlah orang" 
                  value={jumlah_orang} 
                  onChange={(ev) => setJumlah_orang(ev.target.value)}
                  className="w-full p-2 border border-gray-300 rounded" 
                />
            </div>
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Tanggal Mulai*</label>
            <div className="font-['BebasNeue'] text-md w-full p-2 border border-gray-300 rounded h-10 flex items-center">
              <input
                value={tanggal_mulai}
                onChange={(ev) => setTanggal_mulai(ev.target.value)}
                className="w-full"
                type="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Tanggal Selesai*</label>
            <div className="font-['BebasNeue'] text-md w-full p-2 border border-gray-300">
              <input
                value={tanggal_selesai}
                onChange={(ev) => setTanggal_selesai(ev.target.value)}
                className="w-full"
                type="date"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
            <button
              className="mt-6 group relative flex w-full justify-center font-[BebasNeue] rounded-md border border-transparent bg-pink-400 py-3 px-4 text-base font-medium text-white hover:bg-pink-500"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
                </svg>
              ) : (
                <>
                  Pesan Sekarang
                </>
              )}
            </button>
          </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-8">
        <div className="text-center">
          <FaWifi size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Internet dan WiFi kecepatan tinggi</p>
        </div>
        <div className="text-center">
          <FaUsers size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Tim Komunitas Profesional yang Siaga di Tempat</p>
        </div>
        <div className="text-center">
          <FaChalkboardTeacher size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Papan Tulis atau Papan Presentasi</p>
        </div>
        <div className="text-center">
          <FaTv size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Layar Presentasi (TV atau Proyektor)</p>
        </div>
      </div>
    </div>
  );
};


