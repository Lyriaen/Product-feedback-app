import styled from "styled-components";

export const StyledUL = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 30px;
    align-items: center;
    list-style-type: none;
    `

export const StyledLI = styled.li`
    min-width: 800px;
    padding: 20px;
    background-color: ${props => props.theme.colors.primaryBg};
    cursor: pointer;
    border-radius: 15px;
    transition: all 0.3s ease;
    color: inherit; 
    text-decoration: inherit;
    &:hover{
      transform: scale(1.01);
      box-shadow: gray 0 0 15px 0;
    }
`
