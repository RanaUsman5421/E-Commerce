import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import Products from './components/Products'
import Category from './components/Category'
import ProductsSecond from './components/ProductsSecond'
import CategoryMain from './components/CategoryMain'
import OurProducts from './components/OurProducts'
import Featured from './components/Featured'
import Services from './components/Services'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import About from './components/About'
import Checkout from './components/Checkout'
import Account from './components/Account'
import ProductPage from './components/ProductPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Herosec />
          <Products />
          <Category />
          <ProductsSecond />
          <CategoryMain/>
          <OurProducts />
          <Featured/>
          <Services/>
          <Footer/>
        </>
      ),
    },
    {
      path: '/signup',
      element:<><Navbar/><Signup/><Footer/></>
    },
    {
      path: '/login',
      element:<><Navbar/><Login/><Footer/></>
    },
    {
      path: '/contact',
      element:<><Navbar/><Contact/><Footer/></>
    },
    {
      path: '/about',
      element:<><Navbar/><ProductPage/><Footer/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App