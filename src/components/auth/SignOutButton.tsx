import { signout } from "./AuthHandlers";
import { useContext } from "react";
import { AuthContext , AuthContextType } from "../providers/AuthProvider";
import { BlueButton } from "../common/common.styled";

export const SignOutButton = () => {
    const {setUser, setIsAuth} = useContext(AuthContext) as AuthContextType
    return (
        <BlueButton onClick={() => signout(setUser, setIsAuth)}>sign out</BlueButton>
    )
}