import { Navigate, Outlet } from 'react-router';
import { useCheckAuth } from '../hooks';
import { Checking } from '../common/Checking';

export const GeneralRoutes = () => {
  const { status} = useCheckAuth();

  if(status === 'authenticated' || status === 'non-authenticated') return <Outlet /> 
}

export const AuthRoutes = () => {
  const { status } = useCheckAuth()
 
  
  if(status === 'non-authenticated') {
    return <Outlet/>
  } else if( status === 'checking') {
    return <Checking />
  }else {
    <Navigate to='/'/>
  } 
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
      (status === 'authenticated' && rol === 'user' || rol === 'admin') ? <Outlet /> : <Navigate to='/auth/login'/>
    )
}