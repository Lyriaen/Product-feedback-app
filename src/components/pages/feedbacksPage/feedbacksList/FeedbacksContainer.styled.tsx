import styled from "styled-components";
import { BasicContainer } from "../../../common/common.styled";

export const FeedbackContainer = styled.article`
    background-color: ${props => props.theme.colors.primaryBg};
    border-radius: 10px;
    width: 100%;
    `

export const EmptyListContainer = styled(BasicContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 110px 0;
    img {
      margin-bottom: 50px;
    }
    p {
      width: 410px;
      margin-top: 0;
      text-align: center;
    }
    button {
      margin-top: 43px;
    }
    `

export const StyledFeedback = styled.article`
    background-color: ${props => props.theme.colors.primaryBg};
    border-radius: 10px;
    width: 100%;
    display: flex;
    gap: 40px;
    padding: 28px 32px;
    `

export const StyledFeedbackDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 12px;
    align-items: flex-start;
    `

export const StyledCommentsInfo = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: center;
    p {
      font-size: 1.6rem;
      font-weight: 800;
      color: ${ props => props.theme.colors.header };
    }
    `

export const UpvoteCounter = styled.label`
    font-size: 1.3rem;
    font-weight: 800;
    background-color: ${props => props.theme.colors.buttonText};
    color: ${props => props.theme.colors.decorator};
    padding: 12px 9px;
    border-radius: 10px;
    align-self: flex-start;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 8px;
    svg {
      stroke: #4661E6;
    }
    &:hover{
      background-color: #CFD7FF;
    }
    &:has(input:checked){
        background-color: ${props => props.theme.colors.decorator};
        color: ${props => props.theme.colors.buttonText};
        svg {
          stroke: ${props => props.theme.colors.buttonText};
        }
    }
`

export const UpvoteCheckbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
    `