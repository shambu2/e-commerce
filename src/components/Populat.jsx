import React from 'react'
import data_product from '../Assets/data'
import Items from './Items'
const Popular = () => {
  return (
    // <div className='flex justify-center'>
    <div className=' mb-28' >
        <h1 className='text-center text-2xl font-semibold font-serif decoration-slate-900 mt-10  '>POPULAR IN WOMEN</h1>
        {/* <hr className=' w-40 h-5' /> */}
        <div className='flex mb-10 gap-5 justify-center items-center mt-10'>
            {data_product.map((items,i)=>{
              return  <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })}
        </div>
    </div>
    // </div>
  )
}

export default Popular