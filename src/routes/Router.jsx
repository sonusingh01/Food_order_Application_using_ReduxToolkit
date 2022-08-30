import React, { Component } from 'react'
import { Route, Routes , Navigate} from 'react-router-dom'
import Login from "../Pages/Login"
import Register from '../Pages/Register'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import FoodDetails from '../Pages/FoodDetails'
import AllFoods from '../Pages/AllFoods'
import Home from '../Pages/Home'
import Protected from '../routes/Protected'
function Router() {
  return (
    <>
       <Routes>
       <Route path="/home" element={<Home/>} />

       <Route path="/foods" element={<Protected Component={AllFoods} />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Protected Component={Contact}/>}/>
        <Route path="/checkout" element={<Protected Component={Checkout}/>}/>
      
        <Route path="/cart" element={<Protected Component={Cart}/>}/>
        <Route path="/fooddetails/:id" element={<Protected Component={FoodDetails}/>}/>

       </Routes>
    </>
  )
}

export default Router