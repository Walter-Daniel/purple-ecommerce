import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseApp, FirebaseDB } from './config';
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
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
         const {uid } = user;
        // const { token: accessToken, expirationTime } = await getIdTokenResult();
        // await updateProfile( user, {displayName});
       
        console.log(uid)
        const newDoc = doc(collection(FirebaseDB, `valkyria-db/users/${uid}`));

        const newUser = {
            nombre: displayName,
            correo: email,
            rol: 'user'
        }
        await setDoc( newDoc, newUser ) 
        console.log(setDoc)

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
