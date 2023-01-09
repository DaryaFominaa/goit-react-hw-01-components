import { FriendListItem } from 'components/FriendListItem/FriendListItem';

// import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        ))}
      </ul>
    </>
  );
};
