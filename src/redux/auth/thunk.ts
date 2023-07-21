import { AppDispatch, checkingCredentials } from ".."
import { signInWithGoogle } from "../../firebase/provider"

export const startGoogleSignIn = () => {
    return async(dispatch : AppDispatch) => {
        dispatch( checkingCredentials() )
        const result = signInWithGoogle();
        
    }
}