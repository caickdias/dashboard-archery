import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
  password: string;  
}

type Props = {
  onSubmit: (data: string) => void;
}

const LoginForm = ({ onSubmit }: Props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();  

  return (    
      <form 
        className='flex flex-col items-center justify-around p-6 w-72 h-72 rounded-lg mt-8 shadow-xl bg-white' 
        onSubmit={handleSubmit((data) => onSubmit(JSON.stringify(data)))}
      >
        <label className='w-full'>
          <p className="block text-gray-700 font-bold mb-2">Username:</p>
          <input className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          {...register('username', { required: true })} 
          placeholder="Username" />
        </label>
        
        {errors.username && 
        <p className='text-red-500 text-sm'>Username is required</p>
        }

        <label className='w-full'>
        <p className="block text-gray-700 font-bold mb-2">Password:</p>
          <input type='password' className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
           {...register('password', { required: true })} 
           placeholder="Password" />
        </label>
        {errors.password && 
        <p className='text-red-500 text-sm'>Password is required</p>
        }
        <button className='w-full font-bold h-8 rounded-full text-white bg-blue-500' type='submit' name='opa'>
          Login
        </button>    
      </form>

  )
}

export default LoginForm