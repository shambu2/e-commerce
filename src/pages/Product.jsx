// import React from 'react'

import { useParams } from "react-router-dom"
import all_product from "../assets/all_product"
import Breadcrum from "../components/Breadcrum";
// import ProductDisplay from "../components/ProductDisplay";

const Product = () => {
   const {productId} = useParams()
   const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      
    </div>
  )
}

export default Product