// import React from 'react'
import data_product from "../Assets/data"
import Items from "./Items"
const Related = () => {
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh]">
        <h1 className="text-5xl font-semibold ">Relate Products</h1>
        <hr className="w-48 h-2 rounded-lg bg-slate-950"/>
        <div className="flex mt-12 gap-7">
            {data_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Related