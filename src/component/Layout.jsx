import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


import React from 'react'

function Layout() {
  return (
    <>

    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout