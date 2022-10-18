import React  from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Login from '../components/pages/Login';

const PublicRoutes = () => {

    return (        
        <Routes>
            <Route element={<Login />} path="/login" />                
            <Route element={<Login />} path="*" />                
        </Routes>                        
    )
}

export default PublicRoutes