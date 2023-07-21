import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseApp } from "./config";

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
