import { FC } from 'react';
import { useAppSelector } from '../redux';
import { Navigate, Outlet } from 'react-router';
export const PrivateRoute:FC<{}>= () => {
    const { isAuth } = useAppSelector((state) => state.authReducer)
    return (

        isAuth? <Outlet /> : <Navigate to='/login'/>
    )
}