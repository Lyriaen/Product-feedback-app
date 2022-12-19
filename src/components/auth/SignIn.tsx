import { ChangeEvent , FormEvent , useContext , useRef } from 'react';
import { AuthContext , AuthContextType } from '../providers/AuthProvider';
import { signin } from "./AuthHandlers";
import { ButtonsContainer , SignUpLink , StyledContainer } from "../forms/Form.styled";
import { FormContainer } from "../forms/components/FormContainer";
import { TextInput } from "../forms/components/TextInput";
import { PasswordInput } from "../forms/components/PasswordInput";
import { BlueButton , SmallText } from "../common/common.styled";

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
        <FormContainer title={'Sign In'} >
            <TextInput title={'E-mail'}/>
            <PasswordInput title={'Password'}/>
            <SmallText>Forgot your password?</SmallText>
            <ButtonsContainer>
                <BlueButton style={{width: '100%'}}>Sign In</BlueButton>
            </ButtonsContainer>
            <SmallText>Not a member? <SignUpLink to={'./signup'}>Sign Up Now</SignUpLink></SmallText>
        </FormContainer>
    )
}