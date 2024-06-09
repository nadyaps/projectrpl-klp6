import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../axios';

export default function DetailArtikel() {
  const { id } = useParams();
  const [artikelItem, setArtikelItem] = useState({});

  useEffect(() => {
    axiosClient.get(`/artikel/${id}`)
      .then(response => {
        console.log(response.data);  // Log response untuk memastikan data yang diterima
        setArtikelItem(response.data.data);
      })
      .catch(error => console.error('There was an error fetching the article!', error));
  }, [id]);

  // Once data is loaded, render the article details
  return (
    <div className="w-full mt-24 md:mt-24 px-4 md:px-16 py-16 flex flex-col justify-center items-center bg-white font-[BebasNeue]">
      <div className="max-w-screen-xl w-full text-center text-3xl md:text-4xl font-[BebasNeue] uppercase">{artikelItem.judul}</div>
      <div className="max-w-screen-xl w-full mt-8 flex flex-col md:flex-col justify-center items-center gap-8">
        <div className="w-full md:w-[50%] relative">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-lg"></div>
          <img className="w-full h-auto rounded-lg" 
             src = "../../public/assets/img/no_image.jpg"
            // src={artikelItem.photo ? artikelItem.photo : '../../public/assets/img/no_image.jpg'} 
            alt={artikelItem.judul} />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-center gap-4">
          <div className="w-full text-center md:text-center text-neutral-700 text-lg font-normal font-BebasNeue">
            {artikelItem.deskripsi}
          </div>
        </div>
      </div>
    </div>
  );
};

