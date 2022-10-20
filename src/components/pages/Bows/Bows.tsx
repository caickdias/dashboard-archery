import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import { Bow } from '../../../types/bow';
import { GetAllBows } from '../../../services/api/bow'

const queryClient = new QueryClient();

const Bows = () => {

    return(
        <QueryClientProvider client={queryClient}>
            <Page />
        </QueryClientProvider>
    )
}

const Page = () => {

    const { isLoading, error, data: bows } = useQuery(['bowsData'], GetAllBows)

    if(isLoading){
        return (
            <div>Loading</div>
        )
    }

    if(error){
        return (
            <div>Error!</div>
        )
    }   
    return (
        <div className='flex flex-1 flex-col p-4'>              
        {
            bows?.map((bow: Bow) => (
                <div 
                    key={bow['_id']} 
                    className='flex justify-between'
                >
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