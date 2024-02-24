const HeroBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mt-[70%] flex flex-col  min-h-[60vh] items-center justify-between">
          <h1 className="text-5xl font-bold mt-[60%]">Hello There</h1>
          <button className="bg-gray-300  text-black px-5 min-h-8 rounded-2xl uppercase hover:bg-slate-400">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
