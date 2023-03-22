import styled from '@emotion/styled';

export const FriendsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding: 0;
`;

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 240px;
  justify-content: space-between;
`;

export const FriendStatus = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status.isOnline === true ? `green` : `orange`;
  }};
`;
