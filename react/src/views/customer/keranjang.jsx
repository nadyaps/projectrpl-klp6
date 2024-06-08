import React from 'react';

export default function Keranjang() {
  return (
    <div className="w-full mt-24 bg-white flex flex-col justify-center items-center lg:pt-20 pb-10 md:pb-10 lg:pb-10">
      <div className="container mx-auto py-8">
        <div className="text-center text-2xl lg:text-4xl md:text-3xl font-[BebasNeue] mb-10">DAFTAR KERANJANG</div>
        <div className="px-4 md:px-20 lg:px-20 gap-6 mt-5">
          
          {/* First Item */}
          <button className="w-full bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 mb-2">
              <div className="flex items-center">
                <span className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px] pt-1">23 Mei 2024</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-start w-full md:w-auto">
                <img
                  src="../../public/assets/img/aboutus.png"
                  alt="Private Office"
                  className="w-[150px] md:w-[180px] h-[96px] md:h-[116px] rounded-lg object-cover mr-6 mt-2"
                />
                <div>
                  <h2 className="text-[24px] md:text-[30px] font-['BebasNeue'] font-regular">PRIVATE ROOM</h2>
                  <p className="font-['BebasNeue'] font-regular pt-3 text-[16px] md:text-[20px]">1 x Rp 5.000.000</p>
                  <p className="absolute bg-yellow-400 font-['BebasNeue'] text-red text-sm font-semibold py-1 px-2 rounded mt-4">Selesai</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                <p className="font-['BebasNeue'] font-regular text-[18px] md:text-[20px]">Total Belanja</p>
                <p className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px]">Rp 5.000.000</p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-4">
              <a href="/detailTransaksi" className="text-blue-500 hover:underline text-[14px] md:text-[16px]">Lihat Detail Transaksi</a>
            </div>
          </button>
          
          {/* Second Item */}
          <button className="w-full bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 mb-2">
              <div className="flex items-center">
                <span className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px] pt-1">24 Mei 2024</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-start w-full md:w-auto">
                <img
                  src="/asset2/image/Private.png"
                  alt="Meeting Room"
                  className="w-[150px] md:w-[180px] h-[96px] md:h-[116px] rounded-lg object-cover mr-6 mt-2"
                />
                <div>
                  <h2 className="text-[24px] md:text-[30px] font-['BebasNeue'] font-regular">MEETING ROOM</h2>
                  <p className="font-['BebasNeue'] font-regular pt-3 text-[16px] md:text-[20px]">2 x Rp 2.000.000</p>
                  <p className="absolute bg-yellow-400 font-['BebasNeue'] text-red text-sm font-semibold py-1 px-2 rounded mt-4">Mulai</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                <p className="font-['BebasNeue'] font-regular text-[18px] md:text-[20px]">Total Belanja</p>
                <p className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px]">Rp 4.000.000</p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-4">
              <button className="text-blue-500 hover:underline text-[14px] md:text-[16px]">Lihat Detail Transaksi</button>
            </div>
          </button>

          {/* Third Item */}
          <button className="w-full bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 mb-2">
              <div className="flex items-center">
                <span className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px] pt-1">25 Mei 2024</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="flex items-start w-full md:w-auto">
                <img
                  src="/asset2/image/Private.png"
                  alt="Coworking Space"
                  className="w-[150px] md:w-[180px] h-[96px] md:h-[116px] rounded-lg object-cover mr-6 mt-2"
                />
                <div>
                  <h2 className="text-[24px] md:text-[30px] font-['BebasNeue'] font-regular">COWORKING SPACE</h2>
                  <p className="font-['BebasNeue'] font-regular pt-3 text-[16px] md:text-[20px]">3 x Rp 1.000.000</p>
                  <p className="absolute bg-yellow-400 font-['BebasNeue'] text-red text-sm font-semibold py-1 px-2 rounded mt-4">Sementara</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right mt-4 md:mt-0">
                <p className="font-['BebasNeue'] font-regular text-[18px] md:text-[20px]">Total Belanja</p>
                <p className="font-['BebasNeue'] font-semibold text-[18px] md:text-[20px]">Rp 3.000.000</p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-4">
              <button className="text-blue-500 hover:underline text-[14px] md:text-[16px]">Lihat Detail Transaksi</button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
