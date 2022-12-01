import { ChangeEvent , FormEvent , useContext , useRef } from 'react';
import { AuthContext , AuthContextType } from '../providers/AuthProvider';
import { signin } from "./AuthHandlers";

export const SignIn = () => {
    const { setUser, setIsAuth } = useContext(AuthContext) as AuthContextType
    const emailInputElement = useRef<HTMLInputElement>(null)
    const passwordInputElement = useRef<HTMLInputElement>(null)
    const handleSignIn = (event: FormEvent) => {
        event.preventDefault()
        const email = emailInputElement.current?.value || ''
        const password = passwordInputElement.current?.value || ''
        signin( email, password , setUser, setIsAuth)
    }
    return (
        <form>
            <label>email</label>
            <input type={'text'} ref={emailInputElement}/>
            <label>password</label>
            <input type={'password'} ref={passwordInputElement}/>
            <button type={'submit'} onClick={(event) => handleSignIn(event)}>Sign In</button>
        </form>
    )
}