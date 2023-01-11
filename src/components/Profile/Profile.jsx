import PropTypes from 'prop-types';
import {
  ListItem,
  List,
  Section,
  Description,
  Photo,
  FullName,
  NickName,
  Location,
  Label,
  LabelValue,
} from './Profile.styled';

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
    <Section key={tag}>
      <Description>
        <Photo src={avatar} alt={username} />
        <FullName> {username} </FullName>
        <NickName> @{tag}</NickName>
        <Location> {location}</Location>
      </Description>
      <List>
        <ListItem>
          <Label>Followers</Label>
          <LabelValue> {followers}</LabelValue>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <LabelValue> {views}</LabelValue>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <LabelValue> {likes}</LabelValue>
        </ListItem>
      </List>
    </Section>
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
