import { StyledGoBackButton } from "./common.styled";

export const GoBackButton = () => {
    return( <StyledGoBackButton to={''}>
        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33447 9L2.33447 5L6.33447 1" strokeWidth="2"/>
        </svg>
        <p>Go Back</p>
    </StyledGoBackButton>)
}