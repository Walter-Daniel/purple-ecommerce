import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseApp } from "./config";
import { useAppSelector } from "../redux";
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

export const registerWithEmail= async({ firstName, lastName, email, password}:RegisterProps) => {
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        const { uid} = resp.user;
        console.log(resp);
        console.log({uid});
        
    } catch (error) {
        console.log(error);
        
        // return {
        //     ok: false,
        //     errorMessage
        // }
    }
}
