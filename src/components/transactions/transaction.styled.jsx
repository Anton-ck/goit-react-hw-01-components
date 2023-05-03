import styled from '@emotion/styled';

export const TableStyle = styled.table`
  width: 600px;
  max-width: 100%;
  padding: 15px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
`;

export const THeadStyle = styled.thead`
  background-color: lightblue;
`;

export const TrStyle = styled.tr`
  background-color: lemonchiffon;
  &:nth-of-type(2n) {
    color: black;
  }
`;
