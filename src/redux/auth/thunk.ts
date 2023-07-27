import { AppDispatch, checkingCredentials } from ".."
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
       
    return async() => {
        const { ok, message } = await registerWithEmail({ displayName, email, password });
        return {
            ok, message
        }
    }
}