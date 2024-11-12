
import logoIcon from "../assets/logo.png"
import cartIcon from "../assets/cart_icon.png"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="flex border-b-2 pb-5 justify-evenly align-middle pt-10 text-gray-800 border-slate-300">
            <div className="flex  gap-4  items-center">
                <img src={logoIcon} alt="" className="w-14 h-14" />
                <p className="text-2xl font-serif font-semibold text">SHOPPER</p>
            </div>

            <ul className="flex gap-10 text-xl items-center ">
                <Link to="/shop"><li >Shop</li></Link>
                <Link to="/mens"><li >Men</li></Link>
                <Link to="/womens"><li >Women</li></Link>
                <Link to="/kids"><li >Kids</li></Link>
            </ul>

            <div className="flex items-center  gap-10">
                <Link to="/login"><button className="w-32 rounded-full h-10  bg-gradient-to-b from-orange-500 to-red-500">Login</button>
                </Link>
                <Link to="/cart"><img src={cartIcon} alt="" className="w-14 h-14" /></Link>

                <div className="relative bg-red-600 w-6 h-6 text-center rounded-full -ml-14 -mt-10">1</div>
            </div>
        </div>
    )
}

export default Navbar




