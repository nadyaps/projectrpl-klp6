import React from 'react';
import { Link } from 'react-router-dom';

const layanan = [
  { title: 'Private Office', image: 'https://via.placeholder.com/280x216', hourly: 'Rp50.000/jam', daily: 'Rp300.000/hari' },
  { title: 'Meeting Room', image: 'https://via.placeholder.com/280x216', hourly: 'Rp75.000/jam', daily: 'Rp400.000/hari' },
  { title: 'Dedicated Desk', image: 'https://via.placeholder.com/280x216', hourly: 'Rp30.000/jam', daily: 'Rp200.000/hari' },
];

export default function LayananListCus() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-12 p-8 md:p-12 lg:p-16 mt-5">
      <div className="text-center text-4xl font-[BebasNeue]">LAYANAN</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {layanan.map((layanan, index) => (
        <Link to={`/detaillayananCus`} key={index}>
          <div className="bg-white rounded-3xl shadow-md cursor-pointer">
            <div className="bg-neutral-50 rounded-t-3xl overflow-hidden">
              <img className="w-full h-60 object-cover" src={layanan.image} alt="Layanan" />
            </div>
            <div className="bg-white p-6 rounded-b-3xl">
              <div className="text-center text-black text-2xl font-[BebasNeue]">{layanan.title}</div>
              <div className="mt-2 text-center text-black text-md font-normal font-[BebasNeue]">
                <div>{layanan.hourly}</div>
                <div>{layanan.daily}</div>
              </div>
            </div>
          </div>
        </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <a href="/layananCus" className="bg-pink-400 text-white px-6 py-4 rounded-lg uppercase tracking-wider font-[BebasNeue]">Selengkapnya</a>
      </div>
    </div>
  );
}
