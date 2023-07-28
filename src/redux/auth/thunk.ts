import { AppDispatch, checkingCredentials, login, logout } from ".."
import { signInWithGoogle, registerWithEmail, loginWithEmailAndPassword } from "../../firebase/provider"
import { LoginType, RegisterProps } from "../../pages"



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

        // s
    }
}