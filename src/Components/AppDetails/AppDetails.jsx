import React from 'react';
import DownloadImg from '../../assets/icon-downloads.png';
import RatingImg from '../../assets/icon-ratings.png';
import ReviewImg from '../../assets/icon-review.png';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const param = useParams()
    const id = parseInt(param.id);
    const allData = useLoaderData();

    const datas = allData.find(clickedApp => clickedApp.id === id);
    console.log(datas);
    const { image, title, companyName, downloads, ratingAvg, reviews, size, description, ratings } = datas;


    // const data = [
    //     { "name": "1 star", "count": 350 },
    //     { "name": "2 star", "count": 420 },
    //     { "name": "3 star", "count": 900 },
    //     { "name": "4 star", "count": 5400 },
    //     { "name": "5 star", "count": 18930 }
    // ]


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
                        <button className="btn btn-active btn-success text-white font-medium text-lg mt-4">Install Now ({size}MB)</button>
                    </div>

                </div>
            </div>
            <div className='my-12'>
                <h2>Ratings</h2>
                <BarChart width={800} height={600} data={ratings} barCategoryGap={"20%"} >
                    <Bar dataKey="count" fill="#FF8811" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Description</h2>
                {description.map((para, index) => <p className='text-xl mt-4' key={index}>{para}<br /></p>)}
            </div>
        </div>
    );
};

export default AppDetails;