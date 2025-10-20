import React from 'react';
import playImg from '../../assets/play.png'
import { FaAppStoreIos } from "react-icons/fa"; 
import bannerImg from '../../assets/hero.png'



const Banner = () => {



    return (
        <div className='w-10/12 mx-auto flex flex-col justify-between items-center'>
            <div className='flex justify-center flex-col items-center my-16'>
                <h2 className='text-4xl text-center md:text-7xl font-semibold'>We Build </h2>
                <h2 className='text-4xl text-center md:text-7xl font-semibold my-3'> <span className='text-[#632EE3] font-bold'>Productive</span> Apps
                </h2>
                <p className='font-medium text-center py-5 text-gray-400'>At APP Media, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='mt-5 flex gap-12'>
                    <a href='https://play.google.com/store/games?device=windows' target='_blank' className="btn btn-outline "> <img className='w-6 h-7 mr-2' src={playImg} alt="" /> <span className='font-semibold'>Google Play</span></a>

                    <a href='https://www.apple.com/app-store/' target='_blank' className="btn btn-outline "><FaAppStoreIos className='bg-white w-7 h-7 text-blue-500 mr-2' /> <span className='font-semibold'>App Store</span></a>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;