import React from 'react'

import { Bow } from '../../../types/bow';

type Props = {
    bow: Bow;
    onDelete: (id: string) => void;
}

const ItemInfo = ({ bow, onDelete }: Props) => {
  return (
    <div                     
        className='flex justify-between'
    >
        <span>{bow.type}</span>
        <span>{bow.braceHeight}</span>
        <span>{bow.brand}</span>
        <span>{bow.drawWeight}</span>
        <span>{bow.hand}</span>
        <span>{bow.length}</span>
        <span>{bow.modelName}</span>
        <button
            className='text-blue-700 underline'
            onClick={() => onDelete(bow['_id'])}
        >
            Delete
        </button>
    </div>
  )
}

export default ItemInfo