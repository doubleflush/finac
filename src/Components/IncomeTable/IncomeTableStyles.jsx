import styled from "styled-components";

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    /* border: 1px solid black; */

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
      text-align:left;
      border-bottom: 2.5px solid ${(props) => props.theme.colors.tertiary};
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }
`;
