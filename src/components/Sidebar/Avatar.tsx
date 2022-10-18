import React from 'react'

import TextAvatar from '../TextAvatar';

type Props = {
    name: string;
    role: string;
}

const Avatar = ({ name, role }: Props) => {
  return (
    <div className='flex justify-center my-4'>
        <TextAvatar />

        <div className='flex flex-col justify-center text-gray-200 text-xs ml-4'>
        <p>{name}</p>
        <p>{role}</p>
        </div>
    </div>
  )
}

export default Avatar