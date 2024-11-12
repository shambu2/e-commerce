import React from 'react'
import handIcon from "../assets/hand_icon.png"
import heroIcon from "../Assets/hero_image.png"
import arrowIcon from "../Assets/arrow.png"
const Hero = () => {
  return (
    <div className='flex items-center pl-40 w-full h-[100vh] justify-between bg-gradient-to-br from-pink-200 to-transparent'>
        <div >
            <p className='text-2xl font-bold'>
                NEW ARRIVALS ONLY
            </p>
            <div className='text-8xl font-bold '>
                <div className='flex items-center gap-5'>
                    <p>new</p>
                    <img src={handIcon} alt="" className='h-32 '/>
                </div>
                <p>
                    collections
                </p>
                <p>for everyone</p>
            </div>
            <div className='mt-10 font-semibold text-slate-800 flex justify-center  items-center rounded-full gap-2 w-48 h-14 bg-gradient-to-b from-orange-500 to-red-500'>
                <p >Latest Collection</p>
                <img src={arrowIcon} alt="" className='w-8 h-6' />
            </div>
            
        </div>
        <div>
            <img src={heroIcon} alt="" />
        </div>
    </div>
  )
}

export default Hero