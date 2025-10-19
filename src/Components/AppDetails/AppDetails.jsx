import React, { useState } from 'react';
import DownloadImg from '../../assets/icon-downloads.png';
import RatingImg from '../../assets/icon-ratings.png';
import ReviewImg from '../../assets/icon-review.png';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useLoaderData, useParams } from 'react-router';
import { addToLC } from '../../Utility/LocalStorage';

const AppDetails = () => {

    const [installedApp, setInstalledApp] = useState(false);



    const param = useParams()
    const appId = parseInt(param.id);
    const allData = useLoaderData();

    const datas = allData.find(clickedApp => clickedApp.id === appId);
    // console.log(datas);
    const { id, image, title, companyName, downloads, ratingAvg, reviews, size, description, ratings } = datas;
    // console.log(id);

    const handleInstallBtn = (id) => {
        addToLC(id)
        setInstalledApp(true);
        
    }


    return (
        <div className='w-10/12 mx-auto my-7'>
            <div className='flex items-center gap-32 border-b-1 border-gray-300 pb-7'>
                <img className='rounded-lg w-[400px] h-[400px]' src={image} alt="" />
                <div className=''>
                    <div className='border-b-1 border-gray-200 pb-3 mb-3'>
                        <h2 className='text-4xl font-semibold'>{title}</h2>
                        <p className='text-xl font-medium my-4'>Developed by <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] bg-clip-text text-transparent">{companyName}</span></p>
                    </div>
                    <div>
                        <div className='flex justify-between items-center mt-6'>
                            <div>
                                <span><img className='mb-2' src={DownloadImg} alt="" /></span>
                                <p>Downloads</p>
                                <p className='text-[40px] font-extrabold'>{downloads}</p>
                            </div>
                            <div>
                                <span><img className='mb-2' src={RatingImg} alt="" /></span>
                                <p>Average Ratings</p>
                                <p className='text-[40px] font-extrabold'>{ratingAvg}</p>
                            </div>
                            <div>
                                <span><img className='mb-2' src={ReviewImg} alt="" /></span>
                                <p>Total Reviews</p>
                                <p className='text-[40px] font-extrabold'>{reviews}</p>
                            </div>

                        </div>
                        <button onClick={() => handleInstallBtn(id)} disabled={installedApp} className={`btn btn-active ${installedApp ? "bg-green-300" : "btn-success"} text-white font-medium text-lg mt-4`}>{installedApp ? "Installed" : `Install Now (${size}MB)`}</button>
                    </div>

                </div>
            </div>
            <div className='my-12'>
                <h2>Ratings</h2>
                <div className='max-w-6xl mx-auto h-[60vh]'>
                    <ResponsiveContainer width="100%" height={"100%"} >
                        <BarChart data={ratings} barCategoryGap={"20%"} >
                            <Bar dataKey="count" fill="#FF8811" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip></Tooltip>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Description</h2>
                {description.map((para, index) => <p className='text-xl mt-4' key={index}>{para}<br /></p>)}
            </div>
        </div>
    );
};

export default AppDetails;