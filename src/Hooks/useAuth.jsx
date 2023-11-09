import React, { useContext } from 'react';
import { AuthContext } from '../Providers.jsx/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    
    return auth;
};

export default useAuth;