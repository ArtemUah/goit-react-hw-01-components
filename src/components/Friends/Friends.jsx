import { FriendItem } from './FriendItem';
import PropTypes from 'prop-types';
import { FriendsContainer } from './Friend.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id} />;
      })}
    </FriendsContainer>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
