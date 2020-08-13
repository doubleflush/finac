import styled from 'styled-components';
import {AppBar} from '@material-ui/core';

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
    width: 10rem;
`;