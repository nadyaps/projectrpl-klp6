import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../axios';

export default function DetailLayanan() {
  const { id } = useParams();
  const [layananItem, setLayananItem] = useState({});

  useEffect(() => {
    axiosClient.get(`/layanan/${id}`)
      .then(response => {
        console.log(response.data);  // Log response untuk memastikan data yang diterima
        setLayananItem(response.data.data);
      })
      .catch(error => console.error('There was an error fetching the article!', error));
  }, [id]);

  return (
    <div className="w-full mt-24 md:mt-24 px-4 md:px-16 py-40 flex flex-col justify-center items-center bg-white font-[BebasNeue]">
      <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-[50%] relative">
          {/* Frame */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-lg"></div>
            <img className="w-full rounded-lg" 
            src = "../../public/assets/img/no_image.jpg"
            // src={layananItem.photo ? layananItem.photo : '../../public/assets/img/no_image.jpg'}
            alt={layananItem.nama_layanan}/>
          </div>
        
        {/* Description Section */}
        <div className="w-full md:w-[50%] flex flex-col justify-start">
          <div className="text-4xl font-[BebasNeue] text-center md:text-left">{layananItem.nama_layanan}</div>
          <div className="mt-8 text-center md:text-left flex flex-col gap-8">
            <div className="text-neutral-700 text-xl font-normal font-[BebasNeue]">{layananItem.deskripsi}</div>
            <div className="text-neutral-700 text-xl font-normal font-[BebasNeue]">{layananItem.fasilitas}</div>
            <div className="text-neutral-700 text-2xl font-normal font-[BebasNeue]">
            {layananItem.harga && layananItem.harga.length > 0 && (
              <div>{layananItem.harga[0].price} / {layananItem.price_type}</div>
            )}
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <a href = '/login' className="px-6 py-3 mt-10 bg-pink-400 rounded-xl text-white text-lg font-normal font-[BebasNeue] uppercase tracking-widest">Pesan sekarang</a>
          </div>
        </div>
      </div>
    </div>
  );
};
