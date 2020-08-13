import styled from 'styled-components';
import {AppBar, Button} from '@material-ui/core';

interface MenuItemProps {
    readonly selected: boolean;
};
  


export const Header = styled(AppBar)`
    height: 4rem;
    top: 0;
    left: 0;
`;

export const NavContainer = styled.div`
    width: 100%;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.tertiary};
    height: calc(100vh - 4rem);
    position: fixed;
    top: 4rem;
    width: 14rem;
    padding-top: 5rem;
`;
export const MenuItem = styled(Button)<MenuItemProps>`
    width: 100% !important;
    text-align: center !important;
    font-family:  !important;
    font-size: 1.125rem !important;
    font-weight: 700 !important;
    text-transform: capitalize !important;
    border-radius: 0 !important;
    box-shadow: ${props => props.selected ? '0 0 20px 0 lightgrey': 'none'};
    color: ${props => props.theme.colors.primary} !important;
    &:hover{
        background: ${props => props.theme.colors.secondary} !important;
        color: white !important;
    }
`;