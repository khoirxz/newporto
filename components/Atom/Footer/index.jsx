import React from "react";
import { TbHeart } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-400/25 mt-28 pt-10 relative z-30">
      <div className="flex flex-col justify-center items-center">
        <TbHeart size={24} color="#5a5a5a" />
        <p className="mt-3 mb-10">from love to code by khoir</p>
      </div>
    </footer>
  );
};

export default Footer;
