import React, { useState } from "react";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full p-4 flex items-center justify-between  top-0 left-0 z-50">

      {/* Logo */}
      <img
        src="logo.png"
        alt="Cafe 64 Logo"
        className="h-12 w-auto cursor-pointer md:ml-30"
      />

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-10 text-lg font-medium text-white md:mr-120">
        <a className="hover:text-amber-600" href="#home">Home</a>
        <a className="hover:text-amber-600" href="#gallery">Menu</a>
        <a className="hover:text-amber-600" href="#about">About</a>
        <a className="hover:text-amber-600" href="#contact">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setOpen(!open)}
        className="sm:hidden focus:outline-none"
      >
        <img 
          src={open ? closeIcon : menuIcon} 
          alt="menu" 
          className="h-8 w-8"
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-amber-950 text-white 
        flex flex-col items-center space-y-6 py-6 text-lg font-medium 
        transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <a href="#home" onClick={() => setOpen(false)} className="hover:text-amber-400">Home</a>
        <a href="#gallery" onClick={() => setOpen(false)} className="hover:text-amber-400">Menu</a>
        <a href="#about" onClick={() => setOpen(false)} className="hover:text-amber-400">About</a>
        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-amber-400">Contact</a>
      </div>
    </nav>
  );
}
