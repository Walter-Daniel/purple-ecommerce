import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../redux";
import { login, logout } from "../redux/auth";
import { useEffect } from 'react';
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

  const { status, rol } = useAppSelector((state) => state.authReducer)
  const dispatch = useAppDispatch();
    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
          if (!user) return dispatch(logout('no existe usuario'))
          const { uid, email, displayName } = user;
          dispatch(login({uid, email, displayName}))
        } )
      }, [])
    
    return {
        status,
        rol
    }
}
