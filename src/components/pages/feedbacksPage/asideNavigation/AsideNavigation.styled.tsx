import styled from "styled-components";

export const StyledAsideNavigation = styled.aside`
    display: flex;
    flex-flow: column;
    gap: 24px;
    width: 255px;
    background-color: aqua;
    `

export const StyledForm = styled.form`
    padding: 24px;
    display: flex;
    gap: 14px 8px;
    flex-wrap: wrap;
    `

export const TagDiv = styled.div`
  background-color: ${props => props.theme.colors.buttonText};
  color: ${props => props.theme.colors.decorator};
  font-size: 1.3rem;
  font-weight: 700;
  padding: 5px 16px;
  width: auto;
  border-radius: 10px;
`

export const TagLabel = styled(TagDiv)`
    &:hover{
      background-color: #CFD7FF;
    }
    &:has(input:checked){
      background-color: ${props => props.theme.colors.decorator};
      color: ${props => props.theme.colors.buttonText};
    }
    `

export const StyledRadioInput = styled.input.attrs({ type: "radio" })`
    display: none;
    `