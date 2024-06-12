import React from 'react';

export default function  AboutUs() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center gap-12 p-8 md:p-12 lg:p-16">
      <h1 className=" text-center font-['BebasNeue'] text-4xl">ABOUT US</h1>
      <div className="flex justify-center">
        <img
          src="../../public/assets/img/aboutus.png"
          alt="Coworking space"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-custom-blue p-8 rounded-lg shadow-md mb-6">
        <p className="text-gray-800 font-[BebasNeue] text-[15px] md:text-xl text-justify mb-4">
          5.0 Coworking Space Menyuguhkan konsep dan suasana yang ada di gedung baru berbeda dari tempat sebelumnya. Desain interior dibuat lebih minimalis dan modern. Fasilitas 5.0 Coworking Space untuk membantu mereka yang menginginkan sebuah kerja sesuai kebutuhan antara lain private office, workspace dan ruang meeting. Semua fasilitas ini juga dilengkapi dengan layanan coffee space.
        </p>
        <p className="text-gray-800 font-[BebasNeue] text-[15px] md:text-xl text-justify">
          Ada enam layanan yang ditawarkan oleh 5.0 Coworking space. Pertama, Dedicated Desk yaitu menyewa 1 kursi tanpa menyimpan barangnya di loker dan ruangan yang didapatkan terbuka (sewa tempat per jam/ hari). Kedua, Private Office yaitu kantor pribadi/Perusahaan (sewa per bulan minimal 1 bulan). Ketiga, Private Room yaitu dipakai siapa saja (sewa sesuai kebutuhan). Keempat, Meeting Room yaitu jika sudah menjadi member Private Office akan diberikan fasilitas Meeting Room gratis 4 kali dalam 1 bulan. Pengaturannya diatur sesuai kebutuhan dengan mengisi formulir secara manual. Kelima, Virtual Office yaitu penyewaan alamat untuk berkantor (orang yang buat cabang Perusahaan tanpa office hanya dalam bentuk Alamat/kantor online yang muncul di akun resmi Perusahaan) dengan aturan sewa minimal 1 tahun. Terakhir, Coffee Space yaitu pelanggan dapat memesan kopi. Datang pertama atau memesan ruangan pertama kali mendapatkan free kopi.
        </p>
      </div>
    </div>
  );
};
