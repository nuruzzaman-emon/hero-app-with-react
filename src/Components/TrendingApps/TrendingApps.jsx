import React from 'react';
import App from '../App/App';
import { useNavigate } from 'react-router';

const TrendingApps = ({ AppData }) => {
    const navigate = useNavigate();
    const handleViewBtn = () => {
        navigate('/apps');
        
    }




    // console.log(AppData);
    return (
        <div className='w-10/12 mx-auto'>
            <div className='py-16'>
                <h2 className='text-5xl font-bold text-center'>Trending Apps</h2>
                <p className='text-center text-gray-500 mt-2'>Explore the most popular apps of the week</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    AppData.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <button onClick={handleViewBtn} className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]"><span className='text-white font-medium'>View All</span></button>
            </div>

        </div>
    );
};

export default TrendingApps;