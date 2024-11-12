import React from 'react'
import offerImage from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center items-center gap-20 bg-gradient-to-b from-pink-200 to-transparent w-[75vw]  '>
                <div >
                    <div className='text-6xl font-black '>
                        <p>Exclusive</p>
                        <p>Offers For You</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold mt-5 '>ONLY ON BEST SELLERS PROUDCTS</p>
                        <p className='mt-5 w-40 bg-red-500 h-14  font-semibold flex justify-center items-center rounded-3xl'>Check Now</p>
                    </div>
                </div>
                <div>
                    <img src={offerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers