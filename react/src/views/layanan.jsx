import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios.js';

export default function layanan() {
  const [layanan, setLayanan] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define method to fetch data
  const fetchDataLayanan = async () => {
    try {
      const response = await axiosClient.get('/layanan');
      console.log('Response data:', response.data); // Debugging: log response data
      // Assign response data to state "layanan"
      setLayanan(response.data.data || []); // Ensure layanan is an array
    } catch (error) {
      setError(error.message); // Set error message
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Run hook useEffect
  useEffect(() => {
    fetchDataLayanan();
  }, []);

  if (loading) {
    return <div className="bg-white text-center mt-24">Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div className="text-red-500 bg-white text-center mt-24">{error}</div>; // Display error message if any
  }
  if (layanan.length === 0) {
    return <div className="bg-white text-center mt-24">Data tidak tersedia</div>; // Display message if no data is available
  }

  return (
    <div>
      <div className="w-full min-h-screen mt-24 bg-white pt-20 md:pt-20 lg:pt-20 pb-20 md:pb-20 lg:pb-20">
        <div className="text-center text-4xl font-[BebasNeue] mb-10">LAYANAN</div>
        <div className="px-10 md:px-20 lg:px-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {layanan.map((layananItem) => (
            <Link to={`/layanan/${layananItem.id}`} key={layananItem.id}>
              <div className="bg-white rounded-3xl shadow-md cursor-pointer">
                <div className="w-full bg-neutral-50 rounded-t-3xl overflow-hidden">
                  <img className="w-full h-60 object-cover"
                    src = {layananItem.image_url}
                    alt={layananItem.nama_layanan}/>
                </div>
                <div className="bg-white p-6 rounded-b-3xl">
                  <div className="text-center text-black text-2xl font-[BebasNeue]">{layananItem.nama_layanan}</div>
                  <div className="mt-2 text-center text-black text-md font-normal font-[BebasNeue]">
                    <div>{layananItem.deskripsi}</div>
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
