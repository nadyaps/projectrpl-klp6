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
      const response = await axiosClient.get('/artikellist');
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
  

  return (
    <div>
      <div className="w-full bg-white flex flex-col justify-center items-center gap-12 p-8 md:p-12 lg:p-16">
        <div className="text-center text-4xl font-[BebasNeue]">ARTIKEL</div>
        <div className="px-7 md:px-8 lg-px-9 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {artikel.map((artikelItem) => ( // Slice the array to get only the first 3 articles
            <Link to={`/artikel/${artikelItem.id}`} key={artikelItem.id}>
              <div className="bg-white rounded-3xl shadow-md cursor-pointer">
                <div className="w-full bg-neutral-50 rounded-t-3xl overflow-hidden">
                  <img className="w-full h-60 object-cover"
                       src = {artikelItem.image_url}
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
        <div className="flex justify-center items-center ">
          <a href="/artikel" className="bg-pink-400 text-white px-6 py-4 rounded-lg uppercase tracking-wider font-[BebasNeue] mt-10">Selengkapnya</a>
      </div>
      </div>
    </div>
  );
}