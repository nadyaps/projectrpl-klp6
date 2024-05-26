import React from 'react'

export default function aboutus() {
  return (
    <div className="w-full h-[686px] flex-col justify-center items-center gap-8 inline-flex">
      <div className="w-full h-[572px] relative">
        <div className="w-full h-[484px] left-0 top-[88px] absolute">
          <div className="w-full h-[484px] left-0 top-0 absolute bg-amber-300" />
        </div>
        <div className="w-[412.20px] h-[509.22px] left-[195.45px] top-0 absolute">
          <div className="w-[412.20px] h-[509.22px] left-0 top-0 absolute bg-gradient-to-b from-white to-white rounded-xl" />
          <img className="w-[399.86px] h-[497.67px] left-[6.17px] top-[5.78px] absolute rounded-xl" src="https://via.placeholder.com/400x498" />
        </div>
        <div className="w-[532.21px] h-[267px] left-[795.48px] top-[220px] absolute">
          <div className="w-[387.47px] left-[0.08px] top-[72px] absolute text-neutral-700 text-[32px] font-semibold font-[BebasNeue] tracking-wider">5.0 Coworking Space</div>
          <div className="w-[532.21px] h-[154px] left-0 top-[113px] absolute text-neutral-500 text-lg font-normal font-[BebasNeue] tracking-wide mt-5">Fasilitas 5.0 Coworking Space untuk membantu mereka yang menginginkan sebuah kerja sesuai kebutuhan antara lain private office, workspace dan ruang meeting. Semua fasilitas ini juga dilengkapi dengan layanan coffee space. <br/></div>
          <div className="w-[485.45px] h-[66px] left-[0.08px] top-0 absolute text-neutral-700 text-5xl font-normal font-[BebasNeue]">About us</div>
        </div>
      </div>
    </div>
  )
}