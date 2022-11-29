import React , { createContext , useState } from 'react';

type AuthContextType = {
    user: UserType | null,
    setUser: (user: UserType) => void,
    // isLogIn: boolean,
    // setIsLogIn: (prev: boolean) => void,
}

type AuthProviderProps = {
    children: React.ReactNode,
}

type UserType = {
    id: string,
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null)
    return (
        <AuthContext.Provider value={ { user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
