import React, { useContext } from 'react'

import AppContext from '../context/App/Context';

import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {

    const { token } = useContext<any>(AppContext);

    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes