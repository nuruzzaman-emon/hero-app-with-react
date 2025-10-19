import React from 'react';
import Banner from '../Baaner/Banner';
import State from '../State/State';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';


const Home = () => {
    const AppData =  useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <State></State>
            <TrendingApps AppData={AppData}></TrendingApps>
        </div>
    );
};
export   default Home;