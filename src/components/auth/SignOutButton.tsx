import { signout } from "./AuthHandlers";
import { useContext } from "react";
import { AuthContext , AuthContextType } from "../providers/AuthProvider";

export const SignOutButton = () => {
    const {setUser, setIsAuth} = useContext(AuthContext) as AuthContextType
    return (
        <button onClick={() => signout(setUser, setIsAuth)}>sign out</button>
    )
}