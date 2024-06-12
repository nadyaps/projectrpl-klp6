import React from 'react';
import { useState, useEffect } from 'react';
import axiosClient from '../../axios.js';
import { Link } from 'react-router-dom';

export default function Keranjang() {
  const [pemesanan, setPemesanan] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const responsePemesanan = await axiosClient.get('/keranjang');
      console.log('Response data pemesanan:', responsePemesanan.data); // Debugging: log response data pemesanan
      // Assign response data to state
      setPemesanan(responsePemesanan.data.data || []); // Ensure pemesanan is an array
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
  }, []);

  if (loading) {
    return <div className="bg-white text-center mt-24">Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div className="text-red-500 bg-white text-center mt-24">{error}</div>; // Display error message if any
  }
  if (pemesanan.length === 0) {
    return <div className="bg-white text-center mt-24">Data tidak tersedia</div>; // Display message if no data is available
  }
  

  return (
    <div className="w-full mt-24 bg-white flex flex-col justify-center items-center lg:pt-20 pb-10 md:pb-10 lg:pb-10">
      <div className="container mx-auto py-8">
        <div className="text-center text-2xl lg:text-4xl md:text-3xl font-[BebasNeue] mb-10">DAFTAR KERANJANG</div>
        <div className="px-4 md:px-20 lg:px-20 gap-6 mt-5">
          {pemesanan.map((pemesananItem) => (
            <Link to={`/detailtransaksi/${pemesananItem.id}`} key={pemesananItem.id}>
            <div key={pemesananItem.id} className="w-full bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 mb-2">
                <div className="flex items-center">
                  <span className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px] pt-1">{pemesananItem.created_at}</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">

               <div className="w-full md:w-[50%] relative flex flex-col gap-5 md:flex-row md:gap-12">
                  <img
                    src={pemesananItem.image_url}
                    alt={pemesananItem.layanan.nama_layanan}
                    className="w-50% border-4 border-gray-200 rounded-lg"
                  />
                  <div>
                    <h2 className="text-[24px] md:text-[30px] font-['BebasNeue'] uppercase">{pemesananItem.layanan.nama_layanan}</h2>
                    <p className="font-['BebasNeue'] font-regular pt-3 text-[16px] md:text-[20px]"> Rp {pemesananItem.harga.price}</p>
                    <p className={`absolute bg-yellow-400 font-['BebasNeue'] text-red text-sm font-semibold py-1 px-2 rounded mt-4`}>{pemesananItem.status}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                  <p className="font-['BebasNeue'] font-regular text-[18px] md:text-[20px]">Total Belanja</p>
                  <p className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px]">Rp {pemesananItem.harga.price} / {pemesananItem.layanan.price_type}</p>
                </div>
              </div>
              {/* <Link to={`/detailtransaksi/${id}`}>
                <div className="flex justify-end items-center mt-4">
                  <button className="text-blue-500 hover:underline text-[14px] md:text-[16px]">Lihat Detail Transaksi</button>
                </div>
              </Link> */}
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

