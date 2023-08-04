
import { checkingCredentials, login, logout } from "."
import { FirebaseAuth } from "../../firebase/config"
import { signInWithGoogle, registerWithEmail, loginWithEmailAndPassword, logoutFirebase } from "../../firebase/provider"
import { LoginType, RegisterProps } from "../../pages"
import { AppDispatch } from "../store"



export const startGoogleSignIn = () => {
    return async(dispatch : AppDispatch) => {
        dispatch( checkingCredentials() )
        const result = signInWithGoogle();
        console.log(result)
    }
}

export const startRegisterWithEmail = ({ displayName, email, password }:RegisterProps) => {
       
    return async() => {
        const { ok, message } = await registerWithEmail({ displayName, email, password });
        return {
            ok, message
        }
    }
}

export const startLogin = ({ email, password }:LoginType) => {
    return async(dispatch : AppDispatch) => {
        dispatch(checkingCredentials())
        const { ok, displayName, message, uid, rol } = await loginWithEmailAndPassword({email, password})
        !ok ? dispatch(logout(message)) : dispatch(login({uid, displayName, rol}))
        return ok
    }
}

export const startLogout = () => {
    return async( dispath:AppDispatch ) => {
        try {
           await logoutFirebase();
           dispath(logout('salir'))
        } catch (error) {
            console.log(error);
            
        }
    }
}