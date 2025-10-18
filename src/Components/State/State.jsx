import React from 'react';

const State = () => {
    return (
        <div className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white py-12 px-5 md:px-20'>
            <h2 className='text-4xl font-bold  text-center'>Trusted by Millions, Built for You</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-20 py-10'>
                <div className='flex flex-col justify-center items-center space-y-6'>
                    <p>Total Downloads</p>
                    <h3 className='text-6xl font-extrabold'>29.6M</h3>
                    <p>21% more than last month</p> 
                </div>
                <div className='flex flex-col justify-center items-center space-y-6'>
                    <p>Total Reviews</p>
                    <h3 className='text-6xl font-extrabold'>906K</h3>
                    <p>46% more than last month</p> 
                </div>
                <div className='flex flex-col justify-center items-center space-y-6'>
                    <p>Active Apps</p>
                    <h3 className='text-6xl font-extrabold'>132+</h3>
                    <p>31 more will Launch</p> 
                </div>
            </div>
        </div>
    );
};

export default State;