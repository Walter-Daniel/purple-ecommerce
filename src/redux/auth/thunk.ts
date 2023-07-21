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

export const startRegisterWithEmail = ({ firstName, lastName, email, password }:RegisterProps) => {
    return async(dispatch:AppDispatch) => {
        dispatch( checkingCredentials() );
        const resp = await registerWithEmail({ firstName, lastName, email, password });
        console.log(resp)

    }
}