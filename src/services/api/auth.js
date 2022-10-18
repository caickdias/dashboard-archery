const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = async (credentials) => {
    
    const { username: user, password } = JSON.parse(credentials);

    let req = await fetch(`${BASE_URL}/login`, {
        headers: {
            'Content-Type': 'application/json',
        }, 
        method: 'POST',
        body: JSON.stringify({ user, password}),
    });
    return req.json();
}

export {
    Login,
}