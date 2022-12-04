import styled from "styled-components";

export const StyledFeedbacksHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  gap: 40px;
    width: calc(100% - 48px);
    padding: 14px 24px;
    background-color: ${props => props.theme.colors.header};
    border-radius: 10px;
    `
export const StyledFeedbacksHeaderLogo = styled.div`
    display: flex;
    gap: 16px;
    `

export const StyledSortOptionsSelect = styled.form`
    flex: 1;
    `

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  line-height: 2.0rem;
  color: #FFFFFF;
`

export const StyledSelect = styled.select`
    margin-left: 10px;
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    line-height: 2.0rem;
    color: #FFFFFF;
    font-weight: bold;
    font-family: 'Jost',sans-serif;
    `