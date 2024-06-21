import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import API from '../services/API';
import { getCurrentUser } from '../redux/authAction';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await API.get('/auth/current-user');
                if (data?.success) {
                    dispatch(getCurrentUser(data));
                }
            } catch (error) {
                localStorage.clear();
                console.log(error);
            }
        };

        getUser();
    }, [dispatch]); // Add `dispatch` to the dependency array to avoid warnings

    if (localStorage.getItem('token')) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoutes;
