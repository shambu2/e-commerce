import { useParams } from "react-router-dom"
import all_product from "../assets/all_product"
import Breadcrum from "../components/Breadcrum";
import ProductDisplay from "../components/ProductDisplay";
import Related from "../components/Related";
import Footer from "../components/Footer";
// import Description from "../components/Description"
const Product = () => {
   const {productId} = useParams()
   const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      {/* <Description/> */}
      <Related/>
      <Footer/>

    </div>
  )
}

export default Product