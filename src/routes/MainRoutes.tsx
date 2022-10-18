import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import AppContext from '../context/App/Context';

import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const MainRoutes = () => {
    
    const { token } = useContext<any>(AppContext);
 
    return (
        <Router>            
            { token !== '' ? <PrivateRoutes /> : <PublicRoutes />}            
        </Router>
    )
}

export default MainRoutes