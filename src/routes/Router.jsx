import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom'
import Login from "../Pages/Login"
import Register from '../Pages/Register'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import FoodDetails from '../Pages/FoodDetails'
import AllFoods from '../Pages/AllFoods'
import Home from '../Pages/Home'
function Router() {
  return (
    <>
       <Routes>
       <Route path="/home" element={<Home/>} />

       
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/food" element={<AllFoods/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/fooddetails/:id" element={<FoodDetails/>}/>

       </Routes>
    </>
  )
}

export default Router