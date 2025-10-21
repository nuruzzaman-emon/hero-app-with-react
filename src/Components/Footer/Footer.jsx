import React from 'react';
import logoImg from '../../assets/logo.png'
import { TfiTwitter } from 'react-icons/tfi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';

const Footer = () => {
    return (
        <div className=' bg-[#001931] text-white font-semibold py-16 px-20 lg:px-82 '>
            <div className='grid grid-cols-2 lg:grid-cols-4 space-y-5 gap-5'>
                <div>
                    <h2 className='text-xl font-medium flex items-center'>
                        <img className='w-5 h-5' src={logoImg} alt="loading" />
                        <span>APP HUB</span>
                    </h2>
                </div>
                <div>
                    <p><a href="/">Home</a></p>
                    <p><a href="/apps">Apps</a></p>
                    <p><a href="/installation">Installation</a></p>
                </div>
                <div>
                    <p><a href="/">Service</a></p>
                    <p><a href="/">About</a></p>
                    <p><a href="/">Contact</a></p>
                    <p><a href="/">Help</a></p>
                </div>
                <div>
                    <p className='flex items-center gap-2'><FaFacebook></FaFacebook> <a href="https://www.facebook.com/" target='_blank'> Facebook</a></p>
                    <p className='flex items-center gap-2'><FaInstagram></FaInstagram> <a href="https://www.instagram.com/" target='_blank'>InstaGram</a></p  >
                    <p className='flex items-center gap-2'><TfiTwitter></TfiTwitter> <a href="https://x.com/" target='_blank'>Twitter</a></p>
                    <p className='flex items-center gap-2'><CiYoutube></CiYoutube>  <a href="https://www.youtube.com/" target='_blank'>Youtube</a></p  >
                </div>
            </div>
            <h2 className='text-white text-center font-medium mt-8'>Copyright © 2025 - All right reserved</h2>
        </div>
    );
};

export default Footer;