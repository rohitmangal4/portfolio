import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
  
    const menuList = [
      { page: "Home", path: "/home" },
      { page: "Spares By Bike", path: "/sparesbybike" },
      { page: "Luggage", path: "/luggage" },
      { page: "Accessories", path: "/accessories" },
      { page: "BikeService", path: "/bikeservice" },
      { page: "Offers", path: "/offers" },
      { page: "About", path: "/about" },
    ];
  
    return (
      <nav className="w-full min-h-20 font-medium flex flex-wrap justify-center overflow-hidden items-center gap-6  shadow-md shadow-gray-800">
        {menuList.map((value, index) => (
          <Link key={index} to={value.path}>
            <span 
              className={`px-2 py-1.5  ${
                value.path === location.pathname
                  ? "rounded-md bg-gradient-to-r from-[#058CA6] to-[#0E4257] text-white border-b-[3px] border-b-[#0E4257]"
                  : " text-[#0E4257]"
              }  text-black font-medium
            hover:rounded-none hover:border-solid hover:border-b-[3px] hover:border-b-[#0E4257]`}
            >
              {value.page}
            </span>
          </Link>
        ))}
      </nav>
    );
  };
  
  export default Navbar;
  