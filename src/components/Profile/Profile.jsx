import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div key={tag} className="profile">
      <div className="description">
        <img src={avatar} alt={username} width="150px" />
        <p> {username} </p>
        <p> @{tag}</p>
        <p> {location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propType = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
