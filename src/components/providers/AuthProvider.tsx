import React , { createContext , useEffect , useState } from 'react';
import { checkIfUserIsSignIn } from "../auth/AuthHandlers";

export type AuthContextType = {
    user: UserType | null,
    setUser: (user: UserType) => void,
    isAuth: Boolean,
    setIsAuth: (isAuth: Boolean) => void,
}

type AuthProviderProps = {
    children: React.ReactNode,
}

export type UserType = {
    id: string,
} | null

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null)
    const [isAuth, setIsAuth] = useState<Boolean>(false )
    useEffect(() => {
        checkIfUserIsSignIn(setUser, setIsAuth)
    }, []);
    return (
        <AuthContext.Provider value={ { user, setUser, isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
