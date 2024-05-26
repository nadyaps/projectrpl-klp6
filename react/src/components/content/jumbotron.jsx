export default function jumbotron() {
  return (
    
      <div className="w-full mt-24 h-[800px] bg-cover bg-no-repeat relative" style={{ backgroundImage: "url('../../public/assets/img/austin-distel-wawEfYdpkag-unsplash.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-[BebasNeue] leading-[64.80px]">5.0 Coworking Space</h1>
            <p className="mt-3 text-xl md:text-3xl font-[BebasNeue]">Temukan ruang kerja yang nyaman</p>
            <button className="mt-8 px-8 py-6 bg-pink-400 rounded-xl text-md md:text-2xl font-[BebasNeue] uppercase">Lihat Layanan Sekarang</button>
          </div>
        </div>
      </div>
  );
}
