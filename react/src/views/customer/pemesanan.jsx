"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaWifi, FaUsers, FaChalkboardTeacher, FaTv } from 'react-icons/fa'; // Example icons, replace with your own

const MeetingRoomBooking = () => {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('Hari');
  const [peopleCount, setPeopleCount] = useState(3);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ location, roomType, peopleCount, startDate, endDate });
  };

  return (
    <div className="w-full bg-white mt-24 px-10 md:px-16 py-16">
      <h1 className="text-center font-['BebasNeue'] text-4xl md:3xl mb-8">PESAN LAYANAN</h1>
      <p className="font-['BebasNeue'] text-xl md:lg mb-4 text-center">
        Dapatkan layanan yang Anda butuhkan untuk penggunaan pribadi, membuat klien kagum, mengadakan lokakarya yang berkesan, atau menyampaikan presentasi penjualan yang sukses.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="font-['BebasNeue'] text-md mb-4">
          <input 
            type="text" 
            placeholder="Masukkan nama anda" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Jenis Layanan*</label>
            <select 
              value={roomType} 
              onChange={(e) => setRoomType(e.target.value)} 
              className="font-['BebasNeue'] text-md w-full p-2 border border-gray-300 rounded h-10"
            >
              <option value="Hari">Hari</option>
              <option value="Bulan">Bulan</option>
              <option value="Tahun">Tahun</option>
            </select>
          </div>
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Jumlah orang*</label>
            <div className="font-['BebasNeue'] text-md flex items-center justify-between border border-gray-300 rounded p-2 h-10">
              <button 
                type="button" 
                onClick={() => setPeopleCount(peopleCount > 1 ? peopleCount - 1 : 1)} 
                className="text-red-500 px-2"
              >
                -
              </button>
              <span className="mx-4">{peopleCount}</span>
              <button 
                type="button" 
                onClick={() => setPeopleCount(peopleCount + 1)} 
                className="text-red-500 px-2"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Tanggal Mulai*</label>
            <div className="font-['BebasNeue'] text-md w-full p-2 border border-gray-300 rounded h-10 flex items-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full"
                dateFormat="dd/MM/yyyy"
                placeholderText="Pilih tanggal mulai"
              />
            </div>
          </div>
          <div className="relative">
            <label className="font-['BebasNeue'] text-md block mb-2">Tanggal Selesai*</label>
            <div className="font-['BebasNeue'] text-md w-full p-2 border border-gray-300 rounded h-10 flex items-center">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="w-full"
                dateFormat="dd/MM/yyyy"
                placeholderText="Pilih tanggal selesai"
              />
            </div>
          </div>
        </div>
        <button 
          type="submit" 
          className="font-['BebasNeue'] font-semibold text-md w-full p-2 bg-custom-blue text-black rounded mb-4"
        >
          PESAN
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 mb-8">
        <div className="text-center">
          <FaWifi size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Internet dan WiFi kecepatan tinggi</p>
        </div>
        <div className="text-center">
          <FaUsers size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Tim Komunitas Profesional yang Siaga di Tempat</p>
        </div>
        <div className="text-center">
          <FaChalkboardTeacher size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Papan Tulis atau Papan Presentasi</p>
        </div>
        <div className="text-center">
          <FaTv size={32} className="mx-auto mb-2" />
          <p className="font-['BebasNeue'] text-md">Layar Presentasi (TV atau Proyektor)</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoomBooking;
