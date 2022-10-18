import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import AppContext from '../context/App/Context';

import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
    
    const { token } = useContext<any>(AppContext);
 
    return (
        <Router>
            <div className='flex flex-row'>
            
                { token !== '' && <Sidebar />}
            
                <div className='flex flex-1 bg-zinc-300'>
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route element={<Home />} path="/" />

                        </Route>

                        <Route element={<Login />} path="/login" />                
                        <Route element={<Login />} path="*" />                
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default MainRoutes