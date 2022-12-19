import styled from "styled-components";
import { BasicContainer } from "../common/common.styled";

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.inputBg};
  color: ${props => props.theme.colors.secondaryHeaderAndBtn};
  font-size: 1.5rem;
  padding: 16px 24px;
  border: none;
  border-radius: 5px;
  &::placeholder{
    color: ${props => props.theme.colors.inputPlaceholderText};
`

export const StyledContainer = styled.main`
  margin: 0 auto;
  width: 600px;
`

export const StyledFormContainer = styled(BasicContainer)`
  margin-top: 60px;
  padding: 52px 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  h1{
    margin-bottom: 40px;
  }
  ::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 42px;
    height: 56px;
    width: 56px;
    background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    border-radius: 50%;
    transform: translateY(-50%);
  }
`

export const StyledLabel = styled.label`
    p{
      margin: 2px 0 16px;
      font-size: 1.4rem;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 32px;
  align-items: flex-end;
`