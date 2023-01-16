import { useState } from "react";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [form, setForm] = useState(formFields);
    const { displayName, email, password, confirmPassword } = form;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName }); // { displayName } is additionalData object, that will be stored in firestore
            setForm(formFields);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
            }
            console.error(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value }); // [name] is a computed property name, it will be the value of name variable
    }

    return (
        <div>
            <h1>Sign up With your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    type="text"
                    name="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
