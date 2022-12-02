
import { SignOutButton } from "../../auth/SignOutButton";
import { StyledNav , StyledNavLink } from "./header.styled";
import { MediumHeading } from "../../common/common.styled";

export const AccountMenu = () => {
    return (
        <StyledNav>
            <MediumHeading as={StyledNavLink} to={'/profile'}>Profile</MediumHeading>
            <SignOutButton/>
        </StyledNav>
    )
}