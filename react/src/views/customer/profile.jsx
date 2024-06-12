
import React, { useState } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import axiosClient from '../../axios.js';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProfileDetail() {
  const { currentUser } = useStateContext();

  return (
    <div className="p-20 mt-24 bg-white min-h-screen">
      <div className=" bg-white shadow-md rounded-lg overflow-hidden justify-center items-center ">
        <div className="flex justify-between items-center px-10 py-10">
          <h1 className="text-gray-800 font-['BebasNeue'] text-4xl">PROFILE</h1>
        </div>
        <div className="flex justify-center items-center px-6 py-4">
        <img 
            src="../../public/assets/img/no_image.jpg"
            alt={currentUser.name}
            className="rounded-lg shadow-lg wd-md-400 wd-300"
          />
        </div>
        <div className="px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-content-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-['BebasNeue'] text-sm md:text-lg font-semibold">USERNAME:</p>
            <p className="text-gray-600 font-['BebasNeue'] text-sm md:text-lg">{currentUser.username}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-['BebasNeue'] text-sm md:text-lg font-semibold">NOMOR TELEPON:</p>
            <p className="text-gray-600 font-['BebasNeue'] text-sm md:text-lg">{currentUser.phone}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-['BebasNeue'] text-sm md:text-lg font-semibold">NAMA:</p>
            <p className="text-gray-600 font-['BebasNeue'] text-sm md:text-lg">{currentUser.name}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-['BebasNeue'] text-sm md:text-lg font-semibold">EMAIL:</p>
            <p className="text-gray-600 font-['BebasNeue'] text-sm md:text-lg">{currentUser.email}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-800 font-['BebasNeue'] text-sm md:text-lg font-semibold">ALAMAT:</p>
            <p className="text-gray-600 font-['BebasNeue'] text-sm md:text-lg">{currentUser.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

