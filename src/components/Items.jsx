// import React from 'react'
import { Link } from 'react-router-dom'

const Items = (item) => {
  return (
    <div className='w-[350px] hover:scale-105'>
        <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" />
        </Link>
        <div>
            {item.name}
        </div>
        <div className='flex text-base font-semibold gap-1 mt-5 mb-5'>
            <p>${item.new_price}</p>
            <p className='line-through text-gray-600'>${item.old_price}</p>
        </div>
    </div>
  )
}

export default Items