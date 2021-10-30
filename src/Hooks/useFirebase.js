import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/firebase.init"
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'

firebaseInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoding, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const successAlert = () => {
        Swal.fire({
            title: 'SUCCESSFULL',
            text: 'Thank you for joing with us.',
            icon: 'success'
        });
    }
    const logOutAlert = () => {
        Swal.fire({
            title: 'SUCCESSFULL',
            text: 'Successfully logged out.',
            icon: 'success'
        });
    }
    const failAlert = () => {
        Swal.fire({
            title: 'FAILED',
            text: 'Please try again later.',
            icon: 'error'
        });
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user)
                if (res.user.email) {
                    successAlert();
                } else {
                    failAlert()
                }
            })
            .catch(err => setError(err))
    };
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(res => {

            })
            .catch(err => setError(err))
    };
    const registerUser = (email, pass, name) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(uc => {
                setUser(uc.user)
                setUserName(name)
                if (uc.user.email) {
                    successAlert();
                } else {
                    failAlert()
                }
            })
            .catch(err => setError(err))
    };
    const emailSignIn = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                setUser(res.user)
                if (res.user.email) {
                    successAlert();
                } else {
                    failAlert()
                }
            })
            .catch(err => setError(err));
    }




    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                logOutAlert();

            })
            .catch(err => setError(err))
    }




    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    return { googleSignIn, user, emailSignIn, logOut, registerUser, setUserName, error };
}

export default useFirebase;