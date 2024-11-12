// import React from "react";
import footerIcon from "../Assets/logo_big.png";
import instIcon from "../Assets/instagram_icon.png";
import pinIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="max-w-full">
      <div className="flex mt-20 items-center justify-center text-4xl font-black gap-5 text-gray-800">
        <img src={footerIcon} alt="" />
        <h1>SHOPPER</h1>
      </div>
      <ul className="flex gap-10 justify-center m-10 font-semibold">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5 justify-center m-10 ">
        <img src={instIcon} alt="" />
        <img src={pinIcon} alt="" />
        <img src={whatsappIcon} alt="" />
      </div>
      
        <hr className="max-w-full border-gray-950 h-1 " />
        <div className="m-10  items-center justify-center flex">
          Copyright @ 2023 - All Right Reserved
        </div>
      
    </div>
  );
};

export default Footer;
