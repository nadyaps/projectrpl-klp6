import React from 'react';
import { Link } from 'react-router-dom';


export default function Artikel() {
  const artikel = [
    { title: 'Artikel1', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
    { title: 'Artikel1', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
    { title: 'Artikel1', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
    { title: 'Artikel1', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
    { title: 'Artikel1', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
    { title: 'Artikel1 ', image: 'https://via.placeholder.com/280x216', deskripsi:"deskripsi singkatt" },
  ];

  return (
    <div>
      <div>
      </div>
      <div className="w-full min-h-screen mt-24 bg-white flex flex-col justify-center items-center gap-12 pt-20 md:pt-20 lg:pt-20 pb-20 md:pb-20 lg:pb-20">
        <div className="text-center text-4xl font-[BebasNeue]">ARTIKEL</div>
        <div className="px-4 md:px-20 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artikel.map((artikel, index) => ( 
            <Link to={`/detailartikel`} key={index}>
              <div className="bg-white rounded-3xl shadow-md cursor-pointer">
                <div className="bg-neutral-50 rounded-t-3xl overflow-hidden">
                  <img className="w-full h-60 object-cover" src={artikel.image} alt="artikel" />
                </div>
                <div className="bg-white p-6 rounded-b-3xl">
                  <div className="text-center text-black text-2xl font-[BebasNeue]">{artikel.title}</div>
                  <div className="mt-2 text-center text-black text-md font-normal font-[BebasNeue]">
                    <div>{artikel.deskripsi}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
