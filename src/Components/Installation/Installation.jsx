import React, { useState } from 'react';
import downImg from '../../assets/icon-downloads.png';
import rateImg from '../../assets/icon-ratings.png';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router';
import { getFromLC } from '../../Utility/LocalStorage';

const Installation = () => {
    const [sorted, setSorted] = useState("")
    const allData = useLoaderData();
    const saveId = getFromLC();
    const installedApps = saveId.map(id => {
        return allData.find(data => data.id === id)
    })
    const [showApp, setShowApp]= useState(installedApps)

    // console.log(showApp)

    const handleUninstallBtn = (id) => {
        const appData = getFromLC();
        const updatedAppData = appData.filter(app => app !== Number(id));
        localStorage.setItem("appData", JSON.stringify(updatedAppData));
        // window.location.reload();
        const filteredApps = showApp.filter(appInfo => appInfo.id !== id);
        setShowApp(filteredApps)
        toast("App Uninstalled Successfully");
    }

    const parseDownloads = (value) => { 
        return Number(value.slice(0,-1))
    }

    

    const handleSorted = (type) => { 
        setSorted(type)
        // console.log(sorted, type)
        if(type === "high-low"){ 
            const sortedByHighToLow = [...showApp].sort((a,b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
            setShowApp(sortedByHighToLow)
         }
        if(type === "low-high"){ 
            console.log("hii")
            const sortedByLowToHigh  = [...showApp].sort((a,b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
            setShowApp(sortedByLowToHigh)
        }

    }





    return (
        <div className='w-10/12 mx-auto '>
            <div className='py-16'>
                <h2 className='text-5xl font-bold text-center'>My Installed Apps</h2>
                <p className='text-xl text-center mt-5'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='max-w-6xl mx-auto flex justify-between items-center my-5'>
                <h2 className='text-2xl font-semibold'>{installedApps.length} Apps Found</h2>
                <details className="dropdown">
                    <summary className="btn m-1">Sorted By Downloads : ({sorted?sorted:""})</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSorted("high-low")}>high-low</a></li>
                        <li><a onClick={()=>handleSorted("low-high")}>low-high</a></li>
                    </ul>
                </details>
            </div>
            <div className='mt-8 min-h-72'>
                {showApp.map(app => {
                    return <div key={app.id} className='max-w-6xl mx-auto flex flex-col md:flex-row gap-5 justify-between items-center bg-white p-6 rounded-lg mb-2 '>
                        <div className='flex items-center gap-8'>
                            <img className='w-24 h-24' src={app.image} alt="" />
                            <div className=''>
                                <h2 className='text-xl font-semibold'>{app.title}</h2>
                                <div className='flex items-center gap-6 mt-3'>
                                    <span className='font-medium text-[#00D490] flex gap-2'><img className='w-5 h-5' src={downImg} alt="" />{app.downloads}</span>
                                    <span className='font-medium text-[#FFB900] flex gap-2'><img className='w-5 h-5' src={rateImg} alt="" />{app.ratingAvg}</span>
                                    <span className='font-medium'>{app.size}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleUninstallBtn(app.id)} className='btn btn-active btn-success text-white font-medium text-lg mt-4'>Uninstall</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Installation;