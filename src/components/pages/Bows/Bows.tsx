import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import { Bow } from '../../../types/bow';
import BowInfo from './BowInfo';
import { GetAllBows, DeleteBow } from '../../../services/api/bow'

const queryClient = new QueryClient();

const Bows = () => {

    return(
        <QueryClientProvider client={queryClient}>
            <Page />
        </QueryClientProvider>
    )
}

const Page = () => {

    const { isLoading, error, data: bows, refetch } = useQuery(['bowsData'], GetAllBows)

    const handleDeleteBow = async (id: string) => {
        await DeleteBow(id);
        refetch();
    }

    if(isLoading){
        return <div>Loading</div>
    }

    if(error){
        return <div>Error!</div>
    }   
    
    return (
        <div className='flex flex-1 flex-col p-4'>              
        {
            bows?.map((bow: Bow) => (
                <BowInfo 
                    key={bow['_id']} 
                    onDelete={handleDeleteBow}
                    bow={bow} 
                />    
            ))
        }                        
        </div>
    )
}
export default Bows