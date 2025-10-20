import React from 'react';
import { NavLink, useNavigation } from 'react-router';
import logoImg from '../../assets/logo.png';
import btnImg from '../../assets/github.png';
import './Navbar.css'
import { RotatingLines } from 'react-loader-spinner';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);


    return (
        <div>
            <div className="max-auto navbar bg-base-100 shadow-sm md:px-12 py-4" >

                <div className="navbar-start flex">
                        <div className="dropdown md:hidden">
                            <div tabIndex={0} role="button" className=""><HiMenu/></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <NavLink to={"/"}><li>Home</li></NavLink>
                                <NavLink to={"/apps"}><li>Apps</li></NavLink>
                                <NavLink to={"/installation"}><li>Installation</li></NavLink>
                            </ul>
                        </div>
                    <a href='/' className="btn btn-ghost text-xm-3 text-xl md:text-2xl font-bold flex items-center gap-2"><img className='w-7 h-7 md:w-10 md:h-10' src={logoImg} alt="........" /> <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]   bg-clip-text text-transparent">APP Media</span></a>
                </div>
                <div className="navbar-center  hidden md:flex">
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
            <div className='flex justify-center items-center'>
                {isNavigating && <RotatingLines color='gray' />}
            </div>
        </div>

    );
};

export default Navbar;
