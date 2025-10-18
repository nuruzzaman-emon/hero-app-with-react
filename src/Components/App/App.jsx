import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const App = ({ app }) => {
    // console.log(app);
    const { id,title, downloads, ratingAvg, image } = app;
    return (
        <NavLink to={`/appsdetails/${id}`}>
            <div className="card bg-base-100  p-5 shadow-md rounded-lg">
                <figure>
                    <img className='h-80 rounded-lg'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <button className="btn ">
                            <img className='w-4 h-4 mr-2' src={downloadImg} alt="" />
                            <span className='text-[#00D390] font-bold'>{downloads}</span>
                        </button>
                        <button className="btn "><img className='w-4 h-4 mr-2' src={ratingImg} alt="" /><span className='text-[#FF8811] font-bold'>{ratingAvg}</span></button>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};


export default App;