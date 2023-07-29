import { FC } from 'react';
import { useAppSelector } from '../redux';
import { Navigate, Outlet } from 'react-router';
export const PrivateRoute:FC<{}>= () => {
    const { status } = useAppSelector((state) => state.authReducer)
    return (

        status === 'authenticated'? <Outlet /> : <Navigate to='/login'/>

        
    )
}