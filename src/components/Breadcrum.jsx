// import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='flex items-center gap-2 text-slate-900 text-base my-8 mx-36'>
        HOME <img src={arrow_icon} alt="" className='w-2 h-3 flex self-center ' /> SHOP <img src={arrow_icon} alt=""  className='w-2 h-3 flex self-center '/> {product.category} <img src={arrow_icon} alt="" className='w-2 h-3 flex self-center '/> {product.name} 
    </div>
  );
}

export default Breadcrum