export default function footer() {
  return (
    <section className="bg-white relative">
      <div className="absolute inset-0 bg-[url('../../public/assets/img/footerBg.png')] bg-cover bg-center" />
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-10 lg:py-16 flex flex-col md:flex-row relative z-10">
        <div className="md:w-1/4 flex flex-col justify-center items-center mb-10 md:mb-0 md:text-left text-center">
          <div className="text-neutral-700 text-2xl font-[BebasNeue] leading-loose mb-4">
            LOGO
          </div>
          <div className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none">
            Deskrpisi usaha
          </div>
        </div>
        <div className="md:w-1/4 flex flex-col justify-center items-center mb-10 md:mb-0 text-center">
          <div className="text-neutral-700 text-2xl font-[BebasNeue] leading-loose mb-4">Browse</div>
          <div className="flex flex-col gap-2">
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Home</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Services</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Blog</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">About</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Contact</a>
          </div>
        </div>
        <div className="md:w-1/4 flex flex-col justify-center items-center mb-10 md:mb-0 text-center">
          <div className="text-neutral-700 text-2xl font-[BebasNeue] leading-loose mb-4">Services</div>
          <div className="flex flex-col gap-2">
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Virtual Office</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Private Office</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Meeting Room</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Private Room</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Dedicated Desk</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Coffee Shop</a>
          </div>
        </div>
        <div className="md:w-1/4 flex flex-col justify-center items-center text-center">
          <div className="text-neutral-700 text-2xl font-[BebasNeue] leading-loose mb-4">Get Help</div>
          <div className="flex flex-col gap-2">
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">FAQ</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Customer Service</a>
            <a className="text-neutral-700 text-xs font-medium font-[BebasNeue] leading-none" href="/">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
