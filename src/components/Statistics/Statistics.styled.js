import styled from '@emotion/styled';

export const Title = styled.h2``;

export const Board = styled.div`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;
export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const List = styled.ul`
  display: flex;
  padding: 20px;
  gap: 10px;

  background-color: ${getRandomColor};
`;

export const Label = styled.span`
  margin: 0;
  font-size: 26px;
  color: white;
`;

export const LabelValue = styled.span`
  margin: 0;
  font-size: 20px;
`;
