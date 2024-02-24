const TopNavbar = () => {
  return (
    <div className="flex gap-10 mt-5 justify-center items-center mx-auto">
      <div className="uppercase border w-24 h-24 rounded-full font-['Barriecito'] text-gray-300 font-extralight flex justify-center items-center ">
        <h1 className="text-center text-lg">
          David&apos;s <span>Drones</span>
        </h1>
      </div>
      <div className="navbar bg-base-100 w-auto py-0 rounded-sm min-h-6">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 py-0">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Drones</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
