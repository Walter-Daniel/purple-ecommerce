import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore/lite'
import { FirebaseApp, FirebaseDB } from './config';
import { LoginType, RegisterProps } from "../pages";

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
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
         const {uid } = user;
        // const { token: accessToken, expirationTime } = await getIdTokenResult();
        await updateProfile( user, {displayName});
        const newDoc = doc(FirebaseDB, `/users/${uid}`);

        const newUser = {
            displayName,
            email,
            rol: 'user'
        }
        await setDoc( newDoc, newUser ) 

        return {
            ok: true,
            message: 'Usuario creado con éxito',
            uid, displayName, email
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

export const loginWithEmailAndPassword = async({email, password}:LoginType )=> {

    const getRol = async(uid:string) => {
        const newDoc = doc(FirebaseDB, `users/${uid}`);
        const resp = await getDoc(newDoc);
        const info = resp.data()!.rol;
        console.log(info);
        
        return info
    }

    try {
        const { user} = await signInWithEmailAndPassword(auth, email, password);
        const {displayName, uid} = user;
        const rol = await getRol(uid)
        console.log({user});
        
        return {
            ok: true, 
            displayName, uid, rol
        }
        
    } catch (error:any) {
        console.log(error)
        return {
            ok: false,
            message: error.message
        }
    }
}
