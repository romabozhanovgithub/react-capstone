import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    useEffect(() => {
        const logRedirectResult = async () => {
            const res = await getRedirectResult(auth); // auth tracks the state of the user
            if (res) {
                const userDocRef = await createUserDocumentFromAuth(res.user);
            }
        }
        logRedirectResult();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in">
            <h1>Sign  In</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        </div>
    )
}

export default SignIn;
