"use client";

import Logo from "../favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(menuOpen);
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
            <li className=" ml-10 hover:border-b text-xl text-white">Blog</li>
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
    </nav>
  );
};

export default Navbar;
