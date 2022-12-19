import { ButtonsContainer , StyledContainer , StyledFormContainer , StyledGoBackButtonFromForm } from "../Form.styled";
import { GoBackButton } from "../../common/GoBackButton";
import { BigHeading , BlueButton , RedButton , VioletButton } from "../../common/common.styled";

export const FormContainer = ({children, title, logo}) => {
    return (
        <StyledContainer>
            <GoBackButton/>
            <StyledFormContainer>
                <BigHeading>{title}</BigHeading>
                {children}
            </StyledFormContainer>
        </StyledContainer>
    )
}