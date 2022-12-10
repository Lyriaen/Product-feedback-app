import styled from "styled-components";
import { BasicContainer , NormalText } from "../../common/common.styled";

export const StyledRoadmapPage = styled.div`
    width: 90%;
    margin: 0 auto;
    `

export const StyledRoadmapPageHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 24px;
    background-color: ${ props => props.theme.colors.header };
    color: ${ props => props.theme.colors.primaryBg };
    border-radius: 10px;
    `

export const StyledStatusColumnsContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 40px;
    `

export const StyledStatusColumn = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 24px;
    `

export const StyledStatusArticle = styled(BasicContainer)`
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-areas: 
      "status   status  "
      "content  content "
      "upvotes  comments"
      
    ;
    gap: 16px;
    padding: 32px;
    p:first-child{
      text-area: status;
    }
    label{
      grid-area: upvotes;
      justify-self: start;
      flex-direction: row;
      justify-content: center;
      width: 69px;
    }
    div{
      grid-area: content;
    }
    div:last-child{
      grid-area: comments;
      justify-self: end;
    }
    &::before{
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      background-color: ${ props => props.theme.colors[ props.color as string ] };
    }
    `

export const StyledStatusHeading = styled(NormalText)`
    &::before{
        content: '';
        display: inline-block;
        background-color: ${ props => props.theme.colors[ props.color as string ] };
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;     
    }
    `