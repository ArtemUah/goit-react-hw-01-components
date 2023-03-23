import styled from '@emotion/styled';

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  text-align: center;
  background-color: rgb(205,205,205);
  thead {
    background-color: aquamarine;
  }
  tr {
    :nth-child(even) {
    background-color: #fff;
  }
  td {
    border: 1px white solid;
  }
`;
