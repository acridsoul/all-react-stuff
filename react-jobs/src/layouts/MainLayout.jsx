import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    
    </>
  )
}

export default MainLayout