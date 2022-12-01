import { useContext } from "react";
import { AuthContext , AuthContextType } from "../../providers/AuthProvider";
import { AccountMenu } from "./AccountMenu";
import { AuthPanel } from './AuthPanel'

export const Header = () => {
    const {isAuth} = useContext(AuthContext) as AuthContextType
    console.log(isAuth)
    return(
        <header>
            <h1>Product Feedback App</h1>
            <>
                { isAuth ? <AccountMenu/> : <AuthPanel/> }
            </>
        </header>
    )
}