const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const GetAllBows = async () => {
    try{
        let req = await fetch(`${BASE_URL}/bow/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET'            
        })
        return req.json();
    } catch(err){
        return 'error';
    }
}

const DeleteBow = async (id) => {
    try{
        let req = await fetch(`${BASE_URL}/bow/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE'  
        })
        return req.json();
    } catch(err){
        return 'error'
    }
}

export {
    GetAllBows,
    DeleteBow
}