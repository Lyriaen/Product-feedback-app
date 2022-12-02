import { useContext } from "react";
import { AuthContext , AuthContextType } from "../../providers/AuthProvider";
import { AccountMenu } from "./AccountMenu";
import { AuthPanel } from './AuthPanel'
import { BigHeading } from "../../common/common.styled";
import { StyledHeader, StyledNavLink } from "./header.styled";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const {isAuth} = useContext(AuthContext) as AuthContextType
    return(
        <StyledHeader>
            <BigHeading as={StyledNavLink} to={ '/' }>Product Feedback App</BigHeading>
            <>
                { isAuth ? <AccountMenu/> : <AuthPanel/> }
            </>
        </StyledHeader>
    )
}