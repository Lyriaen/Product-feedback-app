import { NavLink } from 'react-router-dom';

export const AuthPanel = () => {
    return (
        <nav>
            <NavLink to={'/signin'}>sign in</NavLink>
            <NavLink to={'/signup'}>sign up</NavLink>
        </nav>
    )
}