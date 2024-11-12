import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import men_banner from "../src/Assets/banner_mens.png"
import women_banner from "../src/Assets/banner_women.png";
import kids_banner from "../src/Assets/banner_kids.png"
function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
