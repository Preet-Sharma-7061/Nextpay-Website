import React, { useState } from "react";
import Companylogo from "../assets/Image/nextpay.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">
          <img src={Companylogo} alt="NextPay Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link to="" className="hover:text-blue-600 cursor-pointer">
            Services
          </Link>
          <Link to="/loan-page" className="hover:text-blue-600 cursor-pointer">
            About
          </Link>
          <Link to="" className="hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </ul>

        {/* Apply Button */}
        <div className="hidden md:block">
          <button className="bg-linear-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 px-6 py-4 text-slate-700 font-medium">
            <li className="hover:text-blue-600">Services</li>
            <li className="hover:text-blue-600">About</li>
            <li className="hover:text-blue-600">Contact</li>
            <button className="mt-2 bg-linear-to-r from-blue-600 to-teal-500 text-white py-2 rounded-full">
              Apply Now
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
