import { useContext } from "react";
import { AuthContext , AuthContextType } from "../../providers/AuthProvider";
import { AccountMenu } from "./AccountMenu";
import { AuthPanel } from './AuthPanel'
import { BigHeading } from "../../common/common.styled";

export const Header = () => {
    const {isAuth} = useContext(AuthContext) as AuthContextType
    console.log(isAuth)
    return(
        <header>
            <BigHeading>Product Feedback App</BigHeading>
            <>
                { isAuth ? <AccountMenu/> : <AuthPanel/> }
            </>
        </header>
    )
}