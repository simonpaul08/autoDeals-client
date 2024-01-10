import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    // activate user 
    const activateUser = (user) => {
        setCurrentUser(user);
        window.localStorage.setItem('AutoDeals-user', JSON.stringify(user));
    }

    // logout
    const logout = () => {
        setCurrentUser(null);
        window.localStorage.removeItem('AutoDeals-user');
    }

    // persist user
    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('AutoDeals-user'));
        if (user) {
            setCurrentUser(user);
        }
    }, [])

    let value = {
        currentUser,
        setCurrentUser,
        activateUser,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;