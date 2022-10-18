import React from 'react'
import LineDivider from './LineDivider';
import TextAvatar from './TextAvatar';

const fakeUser = {
  name: 'Caick Andrade',
  role: 'admin',
}

const Sidebar = () => {

  const [ firstName, secondName ] = (process.env.REACT_APP_APP_NAME || 'Arch Board').split(' ');
  const { name, role } = fakeUser;

  return (
    <div className='flex flex-col h-screen w-1/5 p-4 text-white bg-[#2f3640]'>        
        <div className='flex flex-col items-center w-full'>         
          <div className='text-xl'>
            <span className='font-bold'>
              {firstName}
            </span>
            <span>
              {secondName}
            </span>
          </div>

          <LineDivider />
        </div>

        <div className='flex justify-center my-4'>
          <TextAvatar />

          <div className='flex flex-col justify-center text-gray-200 text-xs ml-4'>
            <p>{name}</p>
            <p>{role}</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar