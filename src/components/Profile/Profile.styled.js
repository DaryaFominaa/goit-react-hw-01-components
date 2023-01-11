import styled from '@emotion/styled';

export const Section = styled.section`
  width: 768px;
`;

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  background-color: ${getRandomColor};
`;

export const List = styled.ul`
  gap: 20px;
  display: flex;
  padding-left: 0;
`;

export const Description = styled.div``;

export const Photo = styled.img`
  width: 150px;
`;

export const FullName = styled.p`
  font-size: 36px;
`;

export const NickName = styled.p`
  font-size: 18px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const Label = styled.p``;

export const LabelValue = styled.span``;
