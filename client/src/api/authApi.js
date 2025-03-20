export const useLogin = () => {
    const login = async (email, password) => {
        try{
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if(!response.ok){
                return {
                    error: 'Invalid email or password'
                };
            }
            const userData = await response.json();
            return userData;
        } catch(err){
            console.log(err.message)
        }
    };

    return [login];
}

export const useLogout = () => {
    const logout = async (accessToken) => {
        if(!accessToken){
            return {
                error: 'A guest cannot logout!'
            };
        }
        try{
            const response = await fetch('http://localhost:3030/users/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken
                },
            });
            if(!response.ok){
                return {
                    error: 'A guest cannot logout!'
                };
            }
            const userData = await response.json();
            return userData;
        } catch(err){
            console.log(err.message)
        }
    };
    return [ logout ];
}