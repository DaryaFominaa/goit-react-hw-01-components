import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li>
        <span> {isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
    </>
  );
};

FriendListItem.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
