import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios';

export default function Artikel() {
  const [artikel, setArtikel] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define method to fetch data
  const fetchDataArtikel = async () => {
    try {
      const response = await axiosClient.get('/artikel');
      console.log('Response data:', response.data); // Debugging: log response data
      // Assign response data to state "artikel"
      setArtikel(response.data.data || []); // Ensure artikel is an array
    } catch (error) {
      setError(error.message); // Set error message
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Run hook useEffect
  useEffect(() => {
    fetchDataArtikel();
  }, []);

  if (loading) {
    return <div className="bg-white text-center mt-24">Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div className="text-red-500 bg-white text-center mt-24">{error}</div>; // Display error message if any
  }
  if (artikel.length === 0) {
    return <div className="bg-white text-center mt-24">Data tidak tersedia</div>; // Display message if no data is available
  }

  return (
    <div>
      <div className="w-full min-h-screen mt-24 bg-white pt-20 md:pt-20 lg:pt-20 pb-20 md:pb-20 lg:pb-20">
        <div className="text-center text-4xl font-[BebasNeue] mb-10">ARTIKEL</div>
        <div className="px-10 md:px-20 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-col justify-center items-center">
          {artikel.map((artikelItem) => (
            <Link to={`/detailartikel/${artikelItem.id}`} key={artikelItem.id}>
              <div className="bg-white rounded-3xl shadow-md cursor-pointer">
                <div className="bg-neutral-50 rounded-t-3xl overflow-hidden">
                <img className="w-full h-60 object-fit"
                    src = "../../public/assets/img/no_image.jpg"
                    // src={artikelItem.photo ? artikelItem.photo : '../../public/assets/img/no_image.jpg'}
                    alt={artikelItem.judul}/>
                </div>
                <div className="bg-white p-6 rounded-b-3xl">
                  <div className="text-center text-black text-2xl font-[BebasNeue]">{artikelItem.judul}</div>
                  <div className="mt-2 text-center text-black text-md font-normal font-[BebasNeue]">
                    <div>{artikelItem.deskripsi}</div>
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
