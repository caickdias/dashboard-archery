import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import AppContext from '../context/App/Context';

import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
    
    const { token } = useContext<any>(AppContext);

    return (
        <Router>
            <Routes>

                <Route element={<PrivateRoutes />}>
                    <Route element={<Home />} path="/" />

                </Route>

                <Route element={<Login />} path="/login" />                
            </Routes>
        </Router>
    )
}

export default MainRoutes