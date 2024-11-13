
import dropdown from '../assets/dropdown_icon.png'
import all_product from '../assets/all_product'
import Items from '../components/Items'
import Footer from '../components/Footer'
// import { useContext } from 'react'
// import { ShopContex } from '../contex/ShopContext'
const ShopCategory = (props) => {
  // const {all_product} = useContext(ShopContex)
  return (
    <div className=' '>
      <div className=' flex content-center h-1/6'>
        <img src={props.banner} alt="banner" className=''/>
      </div>
      <div className='flex justify-between m-[2%]'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='flex items-center gap-2 hover:cursor-pointer'>
          <p>Sort by </p>
          <img src={dropdown} alt="" className=''/>
        </div>
      </div>
      <div className='grid grid-cols-4 m-[2%] '>
       {all_product.map((item,i)=>{
        if(props.category === item.category){
          return(
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
          />
          );
        } else {
          return null ;
        }
       })}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default ShopCategory