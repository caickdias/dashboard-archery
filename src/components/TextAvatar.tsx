import React from 'react'

type Props = {
    name?: string;
}

const TextAvatar = ({ name='caick' }: Props) => {
  return (
    <div 
        className='flex justify-center text-center text-black w-12 h-12 rounded-full bg-gray-300'
    >
        <p className='text-4xl mr-1'>
            {name[0].trim()}
        </p>
    </div>
  )
}

export default TextAvatar