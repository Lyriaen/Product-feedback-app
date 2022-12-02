import styled from "styled-components";

export const BigHeading = styled.h1`
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: -0.33px;
    color: ${ props => props.theme.colors.header };
    `

export const MediumHeading = styled.h2`
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.25px;
    color: ${ props => props.theme.colors.header };
    `

export const SmallHeading = styled.h3`
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.25px;
    color: ${ props => props.theme.colors.header };
    `

export const ExtraSmallHeading = styled.h4`
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.2px;
    color: ${ props => props.theme.colors.header };
    `

export const NormalText = styled.p`
    font-size: 1.6rem;
    line-height: 2.3rem;
    `

export const SmallText = styled.p`
    font-size: 1.5rem;
    line-height: 2.2rem;
    `

export const SemiBoldText = styled.p`
    font-size: 1.3rem;
    line-height: 1.9rem;
    font-weight: 700;
    `

export const Button = styled.button`
    min-width: 160px;
    padding: 11px 0;
    border: none;
    border-radius: 10px;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.2rem;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    color: ${ props => props.theme.colors.buttonText };
    transition: background-color 0.3s ease;
    `

export const VioletButton = styled(Button)`
    background-color: ${ props => props.theme.colors.primaryBtnAndInProgressStatus };
    &:hover{
      background-color: ${ props => props.theme.colors.primaryBtnAndInProgressStatus + '95' };
    }
    `

export const BlueButton = styled(Button)`
    background-color: ${ props => props.theme.colors.replyAndTagText };
    &:hover{
      background-color: ${ props => props.theme.colors.replyAndTagText + '95' };
    }
    `