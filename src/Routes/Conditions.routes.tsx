import { Navigate, Outlet } from 'react-router';
import { useCheckAuth } from '../hooks';



export const AuthRoutes = () => {
  
  const { status } = useCheckAuth();
    return (
        (status === 'non-authenticated') ? <Outlet/>
                                       : <Navigate to='/'/>
    )
    
    
};

export const AdminRoutes = () => {
  const { status, rol } = useCheckAuth();
    return (
      (status === 'authenticated' && rol === 'admin') ? <Outlet /> : <Navigate to='/'/>
    )
};

export const UserRoutes = () => {
  const { status, rol } = useCheckAuth();
    return (
      (status === 'authenticated' && rol === 'user' || rol === 'admin') ? <Outlet /> : <Navigate to='/'/>
    )
}