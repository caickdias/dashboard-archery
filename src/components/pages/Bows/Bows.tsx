import React, { useState, useEffect } from 'react'

import { Bow } from '../../../types/bow';
import { GetAllBows } from '../../../services/api/bow'

const Bows = () => {

    const [bows, setBows] = useState<Bow[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetAllBows()
        .then((res) => {
            setBows(res);
            setLoading(false);
        });
    }, []);

    if(loading){
        return (
            <div>Bows</div>
        )
    }

    return(
        <div className='flex flex-1 flex-col p-4'>            
        {
            bows?.map((bow: Bow) => (
                <div className='flex justify-between'>
                    <span>{bow.type}</span>
                    <span>{bow.braceHeight}</span>
                    <span>{bow.brand}</span>
                    <span>{bow.drawWeight}</span>
                    <span>{bow.hand}</span>
                    <span>{bow.length}</span>
                    <span>{bow.modelName}</span>
                </div>
            ))
        }                        
        </div>
    )
}

export default Bows