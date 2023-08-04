import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../redux";
import { login, logout } from "../redux/auth";
import { FirebaseAuth, FirebaseDB } from "../firebase/config";
import { doc, getDoc } from 'firebase/firestore/lite';

export const useCheckAuth = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      const getRol = async(uid:string) => {
        const newDoc = doc(FirebaseDB, `users/${uid}`);
        const resp = await getDoc(newDoc);
        const info = resp.data()!.rol;
        return info
      }
      if (!user) return dispatch(logout('no existe usuario'))
      console.log(user);
      
      const { uid, email, displayName } = user;
      const rol = await getRol(uid)
      dispatch(login({uid, email, displayName, rol}))
    } )
  }, [])
  
  const { status, rol:statusRol } = useAppSelector((state) => state.authReducer)
    return {
        status,
        rol: statusRol
    }
}
