import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black flex justify-between items-center px-6 py-4">
      <a href="/">
        <p className="text-white text-xl">HelloWorld!</p>
      </a>
      <nav>
        <ul className="flex gap-4">
          <li className="px-4 py-2 bg-slate-200 cursor-pointer hover:bg-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 bg-slate-200 cursor-pointer hover:bg-slate-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="px-4 py-2 bg-slate-200 cursor-pointer hover:bg-slate-300">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 py-2 bg-slate-200 cursor-pointer hover:bg-slate-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
