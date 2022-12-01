import { FirebaseError } from '@firebase/util'
import { getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../../api/firebase"
import { UserType } from "../providers/AuthProvider";
import { firebaseErrors } from "./firebaseErrors";

export const signin = ( email: string  , password: string , setUser: ( user: UserType) => void, setIsAuth: ( isAuth: Boolean) => void) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            getUser(userCredential.user.uid, setUser, setIsAuth)
        })
        .catch((error) => {
           if(error instanceof FirebaseError) {
               console.log( firebaseErrors[error.code as keyof typeof firebaseErrors] )
           }
           else {
               console.log('unknown error')
           }
        })
}

export const signout = (setUser: (user: UserType) => void, setIsAuth: (isAuth: Boolean) => void) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null)
            setIsAuth(false)
        })
}

export const getUser = ( uid: string, setUser: ( user: UserType) => void , setIsAuth: ( isAuth: Boolean ) => void ) => {
    const docRef = doc(db, 'users', uid)
    getDoc(docRef).then((querySnap) => {
        setUser({
            ...querySnap.data(),
            id: uid,
        });
        setIsAuth(true);
    });
}

export const checkIfUserIsSignIn = ( setUser: ( user: UserType) => void , setIsAuth: ( isAuth: Boolean ) => void ) => {
    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            getUser(userData.uid, setUser, setIsAuth)
            }
        else {
            setUser(null);
            setIsAuth(false);
        }
    });
}