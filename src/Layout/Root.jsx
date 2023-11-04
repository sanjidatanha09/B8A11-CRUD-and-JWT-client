/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;