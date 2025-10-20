import React from 'react';
import { NavLink,  useNavigation } from 'react-router';
import logoImg from '../../assets/logo.png';
import btnImg from '../../assets/github.png';   
import './Navbar.css'
import { RotatingLines } from 'react-loader-spinner';

const Navbar = () => {
    const navigation  = useNavigation();
    const isNavigating = Boolean(navigation.location);
 

    return (
        <div className="max-auto navbar bg-base-100 shadow-sm px-12 py-4" >

            {isNavigating && <RotatingLines color='tomato'></RotatingLines>
            
            }

            <div className="navbar-start">
                <a href='/'  className="btn btn-ghost text-xm-3 text-2xl font-bold flex items-center gap-2"><img className='w-10 h-10' src={logoImg} alt="........" /> <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] bg-clip-text text-transparent">APP STORE</span></a>
            </div>
            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/"><li className='m-3 text-2xl font-medium'>Home</li></NavLink>
                    <NavLink to="/apps"><li className='m-3 text-2xl font-medium'>Apps</li></NavLink>
                    <NavLink to="/installation"><li className='m-3 text-2xl font-medium'>Installation</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/nuruzzaman-emon' target='_blank' className="btn flex items-center bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"><img src={btnImg} alt="" /> <span className='text-white'>Contribute</span></a>
            </div>
        </div>
    );
};

export default Navbar;
                