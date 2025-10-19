import React from 'react';
import errorImg from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorElement = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center gap-4 my-16'>
            <img src={errorImg} alt="" />
            <h2 className='text-5xl font-semibold'>Oops, page not found!</h2>
            <p className='text-xl text-[#627382]'>The page you are looking for might have been removed or is temporarily unavailable.</p>
            <button onClick={() => navigate(-1)} className='btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-lg font-semibold text-white'>Go Back</button>
        </div>
    );
};

export default ErrorElement;