import { AppDispatch, checkingCredentials, login, logout, registerInfo } from ".."
import { signInWithGoogle, registerWithEmail } from "../../firebase/provider"
import { RegisterProps } from "../../pages"



export const startGoogleSignIn = () => {
    return async(dispatch : AppDispatch) => {
        dispatch( checkingCredentials() )
        const result = signInWithGoogle();
        console.log(result)
    }
}

export const startRegisterWithEmail = ({ displayName, email, password }:RegisterProps) => {
       
    return async(dispatch:AppDispatch) => {
        const { ok, errorMessage } = await registerWithEmail({ displayName, email, password });
        console.log(errorMessage, 'DESDE EL THUNKKKKKKKKKKKKK')
        if(!ok) return  dispatch( registerInfo(errorMessage));
    }
}