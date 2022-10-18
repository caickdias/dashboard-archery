import React from 'react'

import LineDivider from '../LineDivider';

const Title = () => {
    
  const [ firstName, secondName ] = (process.env.REACT_APP_APP_NAME || 'Arch Board').split(' ');

  return (
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
  )
}

export default Title