import React from 'react'
import FooterPage from './components/Footer/FooterPage'
import Headerpage from './components/Header/HeaderPage'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

    <Headerpage/>
    < Outlet/>
    <FooterPage/>
    
    </>
  )
}

export default Layout