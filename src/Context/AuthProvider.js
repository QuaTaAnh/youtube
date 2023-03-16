import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { user, setUser } = useState({});

    useEffect(() => {
        const unAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                const { photoURL, displayName } = user;
                console.log({ user });
                setUser({ photoURL, displayName });
                navigate('/');
                return;
            }
            setUser({});
            navigate('/login');
        });

        return () => {
            unAuth();
        };
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
