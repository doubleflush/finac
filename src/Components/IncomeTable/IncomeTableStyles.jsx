import styled from "styled-components";
import {Button as MuiButton} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

export const Button = styled(MuiButton)`
  align-self: center !important;
  margin-right: 2rem !important;
  color: ${props => props.theme.colors.primary} !important;
  outline: none !important;
  border: ${props => props.theme.colors.primary} solid 2px !important;

  &:hover{
    background: ${props => props.theme.colors.primary} !important;
    color: white !important;
  }

`;

export const Title = styled.div`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primary};
  font-family: sans-serif;
  align-self: center;
  margin-left: 2rem;
`;

export const AppBar = styled.div`
  box-shadow: 2px 0 10px 2px lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw - 14rem);
  position: relative;
  position: -webkit-sticky;
  top: 0;
  height: 4rem;
  background: ${(props) => props.theme.colors.tertiary};
`;


export const Styles = styled.div`
  position: relative;
  top: 4rem;
  table {
    border-spacing: 0;
    margin: auto;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tbody > tr > :nth-child(5) {
      color: green;
      font-weight: 500;
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      text-align: left;
      border-bottom: 2.5px solid ${(props) => props.theme.colors.tertiary};
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2px;
`;

export const HorizontalInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled(TextField)`
  margin: 2px;
  variant: outlined;
`;


