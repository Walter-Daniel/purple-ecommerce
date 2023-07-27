import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseApp } from "./config";
import { RegisterProps } from "../pages";

const provider = new GoogleAuthProvider();
const auth = getAuth(FirebaseApp);

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result)

        console.log({ credential });
    } catch (error) {
        console.log(error);
        
    }   
}

export const registerWithEmail = async({ email, password, displayName}:RegisterProps) => {
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        // const {uid, photoURL} = resp.user;
        // const { token: accessToken, expirationTime } = await getIdTokenResult();
        await updateProfile( resp.user, {displayName});
        return {
            ok: true,
            message: 'Usuario creado con éxito'
        }
        
    } catch (error:any) {   
        console.log(error.message)
        return {
            ok: false,
            message: (error.message === 'Firebase: Error (auth/email-already-in-use).') 
                                    ? error.message='El email ya se encuentra registrado' 
                                    : error.message
        }
    }
}
