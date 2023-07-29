import { FC } from 'react';
import { useAppSelector } from '../redux';
import { Navigate } from 'react-router';
import { AdminRoutes } from './Admin.routes';
import { UserRoutes } from './User.routes';
export const PrivateRoute:FC<{}>= () => {
    const { rol } = useAppSelector((state) => state.authReducer)
    return (

        (rol === 'admin') ? <AdminRoutes />
                          : ( rol ==='user' ) ? <UserRoutes /> : <Navigate to='/auth/login'/>
    )
}