import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';

const Root = () => {
    return (
        <div className='font-roboto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;