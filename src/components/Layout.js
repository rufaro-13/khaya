import React from 'react'
import Footer from './Footer';
import NavigBar from './NavigBar';
import {Outlet} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
function Layout() {
  const helmetContext = {};
  return (
    
    <HelmetProvider context={helmetContext}>
    <NavigBar />
    <Outlet />
    <Footer />
    </HelmetProvider>
 
  )
}

export default Layout