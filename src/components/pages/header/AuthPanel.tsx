import { Link } from 'react-router-dom';
import { BlueButton , VioletButton } from "../../common/common.styled";
import { StyledNav } from "./header.styled";

export const AuthPanel = () => {
    return (
        <StyledNav>
            <BlueButton as={Link} to={'/signin'}>sign in</BlueButton>
            <VioletButton as={Link} to={'/signup'}>sign up</VioletButton>
        </StyledNav>
    )
}