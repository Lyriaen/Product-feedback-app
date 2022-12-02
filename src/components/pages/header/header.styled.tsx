import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: ${props => props.theme.colors.primaryBg};
    box-shadow: black 0 0 14px 0;
    `

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 30px;
    `

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    &.active{
      color: ${props => props.theme.colors.primaryBtnAndInProgressStatus};
    }
    `