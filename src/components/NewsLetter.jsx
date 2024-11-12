import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[75vw] p-20  bg-gradient-to-b from-pink-200 to-transparent h-[40vh]">
        <h1 className="text-center font-bold text-slate-700 text-5xl">Get Exclusive Offers On Your Email</h1>
        <p className="text-center p-10 text-xl font-bold text-slate-700">Subscribe to our newsletter and stay updated</p>

        <div className="flex justify-center items-center w-full">
          <input type="emai" placeholder="Your Email id" className="w-[500px] h-14 rounded-full pl-10 outline-none "/>
          <button className="h-14 text-white bg-black -ml-10 p-5 rounded-full flex items-center">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
