import React from 'react'

const Items = (item) => {
  return (
    <div className='w-[350px] hover:scale-105'>
        <img src={item.image} alt="" />
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