import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const NavMenu = () => {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-6 text-purple-600 sticky top-0 bg-white z-50">
        <div className="max-sm:flex max-sm:justify-between max-sm:items-center">
          <div
            className="md:hidden"
            onClick={() => setIsHamburgerMenu((prev) => !prev)}
          >
            <RxHamburgerMenu size={24} />
          </div>
          <span className="md:text-3xl text-2xl text-center md:mb-0 ">
            Crane
          </span>
          <div className="md:hidden relative inline-flex">
            <MdOutlineShoppingCart size={20} />
            <span className="absolute rounded-full py-1 px-1 text-xs font-normal leading-none grid place-items-center top-[-20%] right-[-20%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[20px] min-h-[5px]">
              1
            </span>
          </div>
        </div>

        <ul
          className={`uppercase cursor-pointer flex-col md:flex-row gap-4 md:gap-6 ${
            isHamburgerMenu ? "hidden" : "hidden md:flex"
          }`}
        >
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">stationary123</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">wedding</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">business</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">holiday</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">events</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">sympathy</li>
          <li className="hover:border-b-2 border-indigo-500 hover:text-blue-600">sale</li>
        </ul>
        <div
          className={`flex justify-center md:justify-start gap-4 mt-4 md:mt-0 ${
            isHamburgerMenu ? "hidden" : "hidden md:flex"
          }`}
        >
          <CgProfile size={20} />
          <FaSearch size={20} />
          <div className="relative inline-flex">
            <MdOutlineShoppingCart size={20} />
            <span className="absolute rounded-full py-1 px-1 text-xs font-normal leading-none grid place-items-center top-[-20%] right-[-20%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[20px] min-h-[5px]">
              1
            </span>
          </div>
        </div>
      </div>
      {isHamburgerMenu && (
        <div className="fixed top-0 left-0 w-[80%] h-full bg-blue-700 text-white p-6 z-50">
          <div className="flex flex-col gap-4 my-4">
            <div onClick={() => setIsHamburgerMenu(false)}>
              <RxCross2 size={20} />
            </div>
            <div className="flex gap-4">
              <CiSearch size={20} />
              <p className="border-0 border-b-2 border-white focus:border-blue-500 outline-none p-2 w-full"></p>
            </div>
          </div>
          <ul className="uppercase flex flex-col gap-1 cursor-pointer">
            <li className="hover:border-b-2 border-indigo-500">
              stationary123
            </li>
            <li className="hover:border-b-2 border-indigo-500">wedding</li>
            <li className="hover:border-b-2 border-indigo-500">business</li>
            <li className="hover:border-b-2 border-indigo-500">holiday</li>
            <li className="hover:border-b-2 border-indigo-500">events</li>
            <li className="hover:border-b-2 border-indigo-500">sympathy</li>
            <li className="hover:border-b-2 border-indigo-500">sale</li>
          </ul>
          <div className="uppercase flex flex-col gap-4 mt-4">
            <p>store locator</p>
            <p>
              <button>SIGN-IN</button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenu;
