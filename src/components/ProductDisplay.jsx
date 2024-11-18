import React from "react";
import star_icon from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import Footer from "./Footer";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="flex justify-around gap-6 ">
        <div className="flex">
          <div className="flex flex-col gap-3 m-3 ml-36 ">
            <img src={product.image} alt="" className="h-[170px] w-[155px]" />
            <img src={product.image} alt="" className="h-[170px] w-[155px]" />
            <img src={product.image} alt="" className="h-[170px] w-[155px]" />
            <img src={product.image} alt="" className="h-[170px] w-[155px]" />
          </div>
          <div className="m-3 ">
            <img src={product.image} alt="" className=" h-[720px] w-[690px]" />
          </div>
        </div>
        <div className="m-3">
          <h1 className="text-4xl font-medium mb-5">{product.name}</h1>
          <div className="flex">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <p className="mx-2">(122)</p>
          </div>
          <div className="flex gap-6 my-5">
            <div className="line-through text-3xl text-slate-600 font-normal">
              ${product.old_price}
            </div>
            <div className="text-3xl text-red-500 font-normal">
              ${product.new_price}
            </div>
          </div>
          <div className="flex text-slate-700 my-6 font-medium">
            Rogan’s Strange Times (2018) angereflix, Joe Rogan: Rocky Mountain
            High (2014) for Comedy Central, Joe Rogan: Live from the Tabernacle
            (2012) released via his website, Talking Monkeys
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-700 font-medium my-5">Select Size</h1>
            <div className="flex gap-5 mt-4 mb-8">
              <div className="border-solid border-2 px-4 py-3 bg-slate-400">
                S
              </div>
              <div className="border-solid border-2 px-4 py-3 bg-slate-400">
                M
              </div>
              <div className="border-solid border-2 px-4 py-3 bg-slate-400">
                L
              </div>
              <div className="border-solid border-2 px-4 py-3 bg-slate-400">
                XL
              </div>
              <div className="border-solid border-2 px-4 py-3 bg-slate-400">
                XXL
              </div>
            </div>
          </div>
          <div>
            <button className="bg-red-500 w-32 h-14 rounded-md">
              ADD TO CART
            </button>
            <p className="my-5">
              <span className="font-bold ">category:</span>Women, T-shirt,
              Croptop
            </p>
            <p className="my-2">
              <span className="font-bold">Tags :</span>Modern , Latest
            </p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
