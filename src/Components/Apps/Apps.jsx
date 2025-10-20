import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';
import AppError from '../AppError/AppError';
import { MagnifyingGlass, RotatingLines } from 'react-loader-spinner';

const Apps = () => {
    const allApps = useLoaderData();
    const [searchItem, setSearchItem] = useState(allApps);
    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!inputValue){ 
            setSearchItem(allApps)
            setLoading(false)
            return;
        }
        setLoading(true);
        const timeoutId = setTimeout(() =>{ 
            const filteredApps = allApps.filter(app => app.title.trim().toLowerCase().includes(inputValue.trim().toLowerCase()))
            setSearchItem(filteredApps);
            setLoading(false)
        },300)
        return () => clearTimeout(timeoutId)
    },[allApps, inputValue])



    return (
        <div className='w-10/12 mx-auto my-5'>
            <div>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold'>Our All Applications</h2>
                    <p className='text-lg text-gray-400 my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div>
                    <div className='flex justify-between items-center md:p-5'>
                        <h2 className='md:text-2xl font-semibold'>({searchItem.length}) Apps Found</h2>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" onChange={(e) => (setInputValue(e.target.value))} required placeholder="Search" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                {loading && <MagnifyingGlass/>}
            </div>

            {
                searchItem.length === 0 ? <AppError></AppError> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
                        {searchItem.map(app => <App key={app.id} app={app}></App>)}
                    </div>
            }
        </div>
    );
};

export default Apps;