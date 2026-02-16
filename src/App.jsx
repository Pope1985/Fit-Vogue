import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collection from './pages/collection.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Orders from './pages/Orders.jsx'
import Product from './pages/Product.jsx'
import Placeorder from "./pages/Placeorder.jsx"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'

const App = () => {
  return (
    <div className='mx-auto w-full max-w-[1400px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/placeorder' element={<Placeorder />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
