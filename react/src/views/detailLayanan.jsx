import React from 'react';

export default function DetailLayanan() {
  return (
    <div className="w-full max-h-screen mt-24 md:mt-24 px-4 md:px-16 py-16 flex justify-center items-center bg-white">
      <div className="max-w-screen-xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-[50%] relative">
          {/* Frame */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-lg"></div>
          <img className="w-full h-auto rounded-lg" src="https://via.placeholder.com/745x479" alt="Placeholder" />
        </div>
        
        {/* Description Section */}
        <div className="w-full md:w-[50%] flex flex-col justify-start mt-10">
          <div className="text-neutral-700 text-4xl font-normal font-[BebasNeue] text-center md:text-left">PRIVATE ROOM</div>
          <div className="mt-8 text-center md:text-left">
            <div className="text-neutral-500 text-lg font-normal font-[BebasNeue]">Private office adalah kantor pribadi yang dirancang khusus untuk karyawan bekerja secara individu atau sharing dengan tim dalam kelompok kecil.</div>
            <div className="text-neutral-500 text-lg font-normal font-[BebasNeue] mt-4">IDR 50.000 /jam<br />IDR 1.000.000 /bulan</div>
            <button className="px-6 py-3 mt-10 bg-pink-400 rounded-xl text-white text-lg font-normal font-[BebasNeue] uppercase tracking-widest">Pesan sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}
