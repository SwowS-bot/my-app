"use client";

import Logo from "../favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" bg-gray-800 h-20 shadow-xl w-full">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="55"
            height="75"
            className=" cursor-pointer"
            priority
          />
        </Link>
        <div className=" hidden sm:flex">
          <ul className=" hidden sm:flex">
            <li className=" ml-10 hover:border-b text-xl text-white">Home</li>
            <li className=" ml-10 hover:border-b text-xl text-white">About</li>
            <li className=" ml-10 hover:border-b text-xl text-white">
              Contact
            </li>
            <li className=" ml-10 hover:border-b text-xl text-white">Why Us</li>
          </ul>
        </div>
        <div onClick={handleNav} className=" sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-[80%] bg-gray-700 p-10 ease-in duration-500 rounded-xl"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className=" flex-col py-24 text-center text-white text-xl">
          <ul>
            <Link href={"/"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href={"/"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href={"/"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
            <Link href={"/"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Why Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
