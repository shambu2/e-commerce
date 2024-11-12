import React from 'react'
import new_collections from '../Assets/new_collections'
import Items from './Items'
const NewCollections = () => {
    return (
        <div className='flex justify-center items-center max-w-full'>
            <div className='w-[75vw] h-[130vh] justify-center items-center'>
                <h1 className='text-center font-black text-2xl mt-20 mb-20'>NEW COLLECTIONS</h1>
                {/* <hr  className='text-center'/> */}
                <div className='grid grid-cols-4 gap-5'>
                    {new_collections.map((item, i) => {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>

    )
}

export default NewCollections