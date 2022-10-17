const BASE_URL = 'https://localhost:8000/api';

const Login = async (credentials) => {
    
    const { username: user, password } = JSON.parse(credentials);

    let req = await fetch('http://localhost:8000/api/login', {
        headers: {
            'Content-Type': 'application/json',
        }, 
        method: 'POST',
        body: JSON.stringify({ user, password}),
    });
    return await req.json();
}

export {
    Login,
}