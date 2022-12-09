import styled from "styled-components";

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