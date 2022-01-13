import React, {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";

const userAuthContext = createContext(null);

export function UserAuthContextProvider ({children}) {
    const [user, setUser] = useState(null)
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return <userAuthContext.Provider value={{user, signUp}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext)
}
