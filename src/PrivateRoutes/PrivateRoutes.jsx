import React, { useContext } from 'react';
import { authContext } from '../components/Providers/authProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext); 
    const location = useLocation();
    if(loading ) {
        return <div>
            Loading ...
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' state = {{from : location}} replace ></Navigate>
    );
};

export default PrivateRoutes;