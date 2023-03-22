import PropTypes from 'prop-types';
import { FriendsItem, FriendStatus } from './Friend.styled';

export const FriendItem = ({ friend }) => {
  return (
    <FriendsItem>
      <FriendStatus status={friend}></FriendStatus>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </FriendsItem>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
