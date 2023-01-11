import styled from '@emotion/styled';

export const CardFriend = styled.div`
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendImg = styled.img`
  display: block;
  width: 48px;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;
