import { Navigate, Outlet } from 'react-router';
import { useAppSelector } from '../redux';



export const AuthRoutes = () => {
  const { status } = useAppSelector((state) => state.authReducer)
    return (
        (status === 'non-authenticated') ? <Outlet/>
                                       : <Navigate to='/'/>
    )
}
export const AdminRoutes = () => {
  const { status, rol } = useAppSelector((state) => state.authReducer)
    return (
      (status === 'authenticated') ? <Outlet /> : <Navigate to='/'/>
    )
}