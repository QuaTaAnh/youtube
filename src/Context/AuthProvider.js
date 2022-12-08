import { auth } from '../../src/firebase/config';
// import auth from 'firebase';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const { displayName, email, photoURL } = user;
                setUser({ displayName, email, photoURL });
                navigate('/');
                return;
            }
            navigate('/login');
        });

        //clean function
        return () => {
            unsubscribe();
        };
    }, [navigate]);
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
