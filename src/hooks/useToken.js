
import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const userEmail = user?.email;
        if (userEmail) {
            fetch(`http://localhost:5000/user/token/${userEmail}`)
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                    console.log('Data iinside useToken', data);
                })
        }
    }, [ user?.email]);

    return [token];
};

export default useToken;