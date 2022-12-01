import { NavLink } from 'react-router-dom';
import { SignOutButton } from "../../auth/SignOutButton";

export const AccountMenu = () => {
    return (
        <nav>
            <NavLink to={'/profile'}>Profile</NavLink>
            <SignOutButton/>
        </nav>
    )
}