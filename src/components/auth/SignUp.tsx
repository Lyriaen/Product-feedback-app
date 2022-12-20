import { TextInput } from "../forms/components/TextInput";
import { PasswordInput } from "../forms/components/PasswordInput";
import { BlueButton , SmallText , VioletButton } from "../common/common.styled";
import { ButtonsContainer , SignUpLink } from "../forms/Form.styled";
import { FormContainer } from "../forms/components/FormContainer";

export const SignUp = () => {
    return (
        <FormContainer title={'Sign Up'} >
            <TextInput title={'E-mail'}/>
            <PasswordInput title={'Password'}/>
            <PasswordInput title={'Repeat password'}/>
            <ButtonsContainer>
                <VioletButton style={{width: '100%'}}>Sign Up</VioletButton>
            </ButtonsContainer>
        </FormContainer>
    )
}