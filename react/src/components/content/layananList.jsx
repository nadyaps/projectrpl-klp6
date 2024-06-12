import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios';

export default function layanan() {
  const [layanan, setLayanan] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define method to fetch data
  const fetchDataLayanan = async () => {
    try {
      const response = await axiosClient.get('/layananlist');
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

  return (
    <div>
      <div className="w-full bg-white flex flex-col justify-center items-center gap-12 p-8 md:p-12 lg:p-16">
        <div className="text-center text-4xl font-[BebasNeue]">LAYANAN</div>
        <div className="px-7 md:px-8 lg-px-9 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {layanan.map((layananItem) => (// Slice the array to get only the first 3 articles
            <Link to={`/layanan/${layananItem.id}`} key={layananItem.id}>
              <div className="bg-white rounded-3xl shadow-md cursor-pointer">
                <div className="w-full bg-neutral-50 rounded-t-3xl overflow-hidden">
                  <img className="w-full h-60 object-cover"
                      //  src = "../../public/assets/img/no_image.jpg"
                       src={layananItem.image_url}
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
        <div className="flex justify-center items-center ">
          <a href="/layanan" className="bg-pink-400 text-white px-6 py-4 rounded-lg uppercase tracking-wider font-[BebasNeue] mt-10">Selengkapnya</a>
      </div>
      </div>
    </div>
  );
}