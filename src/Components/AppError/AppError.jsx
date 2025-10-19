import React from 'react';
import AppErrorImg from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';


const AppError = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center gap-4 my-16'>
                <img src={AppErrorImg} alt="App Error" />
                <h2 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h2>
                <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>
                <button onClick={() => navigate(-1)} className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-lg font-semibold text-white'>Go Back</button>
        </div>
    );
};

export default AppError;