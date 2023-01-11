import PropTypes from 'prop-types';
import {
  Status,
  Item,
  FriendImg,
  CardFriend,
  FriendName,
} from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <CardFriend>
      <Item>
        <Status isOnline={isOnline}>{isOnline}</Status>
        <FriendImg src={avatar} alt={name} />
        <FriendName>{name}</FriendName>
      </Item>
    </CardFriend>
  );
};

FriendListItem.propType = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
