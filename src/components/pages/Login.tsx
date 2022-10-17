import React, { useContext } from 'react';

import AppContext from '../../context/App/Context';

import LogoImage from '../../assets/logo.png';
import LoginForm from '../forms/LoginForm';

import { Navigate } from 'react-router-dom';
import { Login as APILogin } from '../../services/api';

const Login = () => {
  
    const { token, setToken } = useContext<any>(AppContext);

    const onSubmit = async (data: string) => {
        
        const response = await APILogin(data);
        
        if(response.success === true){            
            setToken('fakeToken');            
        }
    }

    if(token !== ''){
        return <Navigate to='/' />
    }

    return (
        <div className='flex'>         
            <div className={`flex flex-col w-1/2 h-screen text-white items-center justify-center bg-primaryBg`}>
                <h1 className='text-5xl mb-4'>
                    A D M I N
                </h1>

                <h3>
                    Login to continue
                </h3>
            </div>         
            
            <div className={`flex w-1/2 h-screen flex-col items-center justify-center bg-greyBg`}>
                
                <div className='flex flex-1 items-end'>
                    <img className=' h-20'  src={LogoImage} alt='opa' />
                </div>

                <LoginForm onSubmit={onSubmit} />

                <div className='flex flex-1'>
                </div>
            </div>


        </div>
    )
}

export default Login