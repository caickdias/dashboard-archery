import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import AppContext from '../context/App/Context';

import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/pages/Home';
import Bows from '../components/pages/Bows/Bows';
import NotFound from '../components/pages/NotFound';

const PrivateRoutes = () => {

    const { token } = useContext<any>(AppContext);

    return (
    
        <div className='flex flex-row'>
        
            { token !== '' && <Sidebar />}            
        
            <div className='flex flex-1 bg-zinc-300'>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Bows />} path="/bows" />
                    <Route element={<NotFound />} path="*" />
                </Routes>
            </div>
        </div>
        
    )
}

export default PrivateRoutes