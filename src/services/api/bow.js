const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const GetAllBows = async () => {
    try{
        let req = await fetch(`${BASE_URL}/bows`, {
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

export {
    GetAllBows,
}