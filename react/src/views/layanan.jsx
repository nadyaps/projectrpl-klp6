import React from 'react';
import { Link } from 'react-router-dom';


export default function Layanan() {
  const layanan = [
    { title: 'Private Office', image: 'https://via.placeholder.com/280x216', hourly: 'Rp50.000/jam', daily: 'Rp300.000/hari' },
    { title: 'Meeting Room', image: 'https://via.placeholder.com/280x216', hourly: 'Rp75.000/jam', daily: 'Rp400.000/hari' },
    { title: 'Dedicated Desk', image: 'https://via.placeholder.com/280x216', hourly: 'Rp30.000/jam', daily: 'Rp200.000/hari' },
    { title: 'Hot Desk', image: 'https://via.placeholder.com/280x216', hourly: 'Rp20.000/jam', daily: 'Rp150.000/hari' },
    { title: 'Virtual Office', image: 'https://via.placeholder.com/280x216', hourly: 'Rp100.000/jam', daily: 'Rp500.000/hari' },
    { title: 'Event Space', image: 'https://via.placeholder.com/280x216', hourly: 'Rp150.000/jam', daily: 'Rp1.000.000/hari' },
  ];

  return (
    <div>
      <div>
      </div>
      <div className="w-full min-h-screen mt-24 bg-white flex flex-col justify-center items-center gap-12 pt-20 md:pt-20 lg:pt-20 pb-20 md:pb-20 lg:pb-20">
        <div className="text-center text-4xl font-[BebasNeue]">LAYANAN</div>
        <div className="px-4 md:px-20 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layanan.map((layanan, index) => ( 
            <Link to={`/detaillayanan`} key={index}>
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
      </div>
    </div>
  );
}
