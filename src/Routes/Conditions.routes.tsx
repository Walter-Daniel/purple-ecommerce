import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '../redux';



export const AuthRoutes = () => {
  const { status } = useAppSelector((state) => state.authReducer)
    return (
        (status === 'non-authenticated') ? <Outlet/>
                                       : <Navigate to='/'/>
    )
};

export const AdminRoutes = () => {
  const { status, rol } = useAppSelector((state) => state.authReducer)
    return (
      (status === 'authenticated' && rol === 'admin') ? <Outlet /> : <Navigate to='/'/>
    )
};

export const UserRoutes = () => {
  const { status, rol } = useAppSelector((state) => state.authReducer)
    return (
      (status === 'authenticated' && rol === 'user' || rol === 'admin') ? <Outlet /> : <Navigate to='/'/>
    )
}