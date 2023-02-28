import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const { user, setUser } = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const unAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log(user);
                // const { photoURL, displayName } = user;
                setUser({ user });
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
