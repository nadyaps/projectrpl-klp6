import React from 'react';

export default function DetailArtikel() {
  return (
    <div className="w-full mt-24 md:mt-24 px-4 md:px-16 py-16 flex flex-col justify-center items-center bg-white font-[BebasNeue]">
      <div className="max-w-screen-xl w-full text-center text-3xl md:text-4xl font-[BebasNeue]">JUDUL ARTIKEL</div>
      <div className="max-w-screen-xl w-full mt-8 flex flex-col md:flex-col justify-center items-center gap-8">
        <div className="w-full md:w-[50%] relative">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-lg"></div>
          <img className="w-full h-auto rounded-lg" src="https://via.placeholder.com/744x476" alt="Placeholder" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-center gap-4">
          <div className="w-full text-center md:text-center text-neutral-700 text-lg font-normal font-BebasNeue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum molestias ad saepe veniam aliquam earum natus. Dignissimos rerum aperiam ipsam necessitatibus id excepturi odit officiis ea voluptate placeat quod quo nihil porro ipsum debitis quam cumque et doloremque, deserunt tempora eaque, error omnis nemo! Voluptatibus vitae qui beatae ad a ab ipsam placeat, atque inventore aperiam suscipit rem illum accusantium laudantium porro neque, tempore, quo omnis sint? Necessitatibus velit alias dolor ullam nobis minus cupiditate placeat, nemo doloribus nihil libero deleniti magnam facilis ipsam corporis recusandae saepe cumque odio quisquam architecto eligendi amet! Odit voluptas adipisci nihil incidunt unde.
          </div>
        </div>
      </div>
    </div>
  );
}
