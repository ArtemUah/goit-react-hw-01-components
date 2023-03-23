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
    align-items: center;
    gap: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: aliceblue;
    width: 100%;
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status.isOnline === true ? `green` : `orange`;
  }};
`;
