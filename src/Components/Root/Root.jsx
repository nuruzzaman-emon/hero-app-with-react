import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';
import { ToastContainer } from 'react-toastify';

const Root = () => {


    return (
        <div className='font-roboto bg-gray-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;