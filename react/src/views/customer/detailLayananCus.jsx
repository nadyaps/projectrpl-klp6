import React from 'react';

export default function DetailLayanan() {
  return (
    <div className="w-full bg-white min-h-screen md:mt-24 px-4 md:px-16 py-16 flex justify-center items-center">
      <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-[50%] relative">
          {/* Frame */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-lg"></div>
          <img className="w-full rounded-lg" src="https://via.placeholder.com/745x479" alt="Placeholder" />
        </div>
        
        {/* Description Section */}
        <div className="w-full md:w-[50%] flex flex-col justify-start mt-10">
          <div className="text-4xl font-[BebasNeue] text-center md:text-left">PRIVATE ROOM</div>
          <div className="mt-8 text-center md:text-left">
            <div className="text-neutral-700 text-lg font-normal font-[BebasNeue]">Private office adalah kantor pribadi yang dirancang khusus untuk karyawan bekerja secara individu atau sharing dengan tim dalam kelompok kecil.</div>
            <div className="text-neutral-700 text-lg font-normal font-[BebasNeue] mt-4">IDR 50.000 /jam<br />IDR 1.000.000 /bulan</div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <a href = '/pemesanan' className="px-6 py-3 mt-10 bg-pink-400 rounded-xl text-white text-lg font-normal font-[BebasNeue] uppercase tracking-widest">Pesan sekarang</a>
          </div>
        </div>
      </div>
    </div>
  );
}
