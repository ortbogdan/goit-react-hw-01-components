import styled from '@emotion/styled';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

export const StatisticsContainer = styled.section`
  width: 400px;
  height: 200px;
  border-radius: 4px;
  text-align: center;
  background-color: rgb(255, 255, 255);
`;
export const Title = styled.h2`
  margin: 0;
  padding: 30px 0 30px 0;
  text-transform: uppercase;
  text-align: center;

  color: rgb(117, 117, 117);
`;

export const StatsList = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
`;
