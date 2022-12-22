import styled from "styled-components";
import { BasicContainer } from "../common/common.styled";
import { Link } from "react-router-dom";

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
  width: 540px;
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
      margin-top: 2px;
      font-size: 1.4rem;
    }
    input, textarea{
      margin-top: 16px;
    }
  :has(ul){
    position: relative;
  }
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 32px;
    align-items: flex-end;
`

export const SignUpLink = styled(Link)`
    color: ${props => props.theme.colors.mention};
    font-weight: 800;
    text-decoration: none;
`

export const StyledOptionsList = styled.ul`
  background-color: #979797;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  list-style: none;
  padding: 0;
  box-shadow: #979797 0 0 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120%;
  
`

export const StyledOptionItem = styled.li`
  background-color: ${props => props.theme.colors.primaryBg};
  padding: 12px 24px;
  font-size: 1.6rem;
  border: none;
  border-bottom: #979797 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover{
    color: ${props => props.theme.colors.mention};
  }
  svg{
    transform: scale(1.5);
  }
  
  :last-child{
    border-bottom: none;
  }
`

export const StyledSelectInput = styled.div`
    position: relative;
    svg {
      position: absolute;
      bottom: calc(50% - 16px);
      right: 20px;
      &[data-show=true] {
        transform: scale(1.8) translateY(-30%) rotate(0deg);
      }
      &[data-show="false"] {
        transform: scale(1.8) translateY(-20%) rotate(180deg);
      }
    }

`