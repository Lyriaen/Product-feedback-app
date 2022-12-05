import styled from "styled-components";
import { BasicContainer , SemiBoldText } from "../../../common/common.styled";
import { Link } from "react-router-dom";

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

export const StyledRoadmapContainer = styled(BasicContainer)`
    padding: 24px;
    `

export const StyledRoadmapHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const ViewButton = styled(Link)`
      font-size: 1.3rem;
      line-height: 1.9rem;
      font-weight: 700;
      color: ${ props => props.theme.colors.decorator };
    `

export const StyledRoadmapOptionsContainer = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
`

export const StyledRoadmapOption = styled.li`
    display: flex;
    align-items: center;
    p:first-child{
        flex-grow: 1;
    } 
    &::before{
        content: '';
        background-color: ${props => props.theme.colors[props.color as string]};
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;     
    }
    `

export const TaskCounter = styled.p`
    font-weight: 800;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.text};
    `