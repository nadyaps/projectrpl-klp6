import React from 'react';

const TransactionDetail = () => {
  // Sample data based on the image provided
  const transaction = {
    date: '23 Mei 2024',
    nama: 'Vikran',
    namaLayanan: 'Private Office',
    serviceType: 'Tahun',
    numberOfPeople: '10 Orang',
    startDate: '23/05/2024',
    endDate: '23/05/2025',
    totalPrice: 'Rp 5.000.000',
  };

  return (
    <div className="min-h-screen w-full mt-24 px-10 md:px-16 py-16 bg-white">
      <div className="container mx-auto py-8 px-8">
        <h1 className="text-center font-['BebasNeue'] text-3xl md:text-4xl mb-8">DETAIL TRANSAKSI</h1>
        <div className="flex justify-center mb-10">
          <img
            src="../../public/assets/img/aboutus.png"
            alt="Coworking space"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg pb-2 pt-1 mb-6">
          <div className="flex justify-between items-center border-b pb-2 mb-2 mt-2">
            <div className="flex items-center">
              <span className="font-['Montserrat'] font-semibold text-md pt-1">{transaction.date}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Nama</p>
              <p className="font-['Montserrat'] text-md">{transaction.nama}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Nama Layanan</p>
              <p className="font-['Montserrat'] text-md">{transaction.namaLayanan}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Jenis Layanan</p>
              <p className="font-['Montserrat'] text-md">{transaction.serviceType}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Jumlah Orang</p>
              <p className="font-['Montserrat'] text-md">{transaction.numberOfPeople}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Tanggal Mulai</p>
              <p className="font-['Montserrat'] text-md">{transaction.startDate}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-['Montserrat'] text-md">Waktu Mulai</p>
              <p className="font-['Montserrat'] text-md">{transaction.endDate}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-['Montserrat'] font-semibold text-md">Total Belanja</p>
              <p className="font-['Montserrat'] font-semibold text-md">{transaction.totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
