import PropTypes from 'prop-types';
import {
  UserActivity,
  UserActivityItem,
  ActivityTitle,
  ActivityValue,
} from './UserStats.styled';

export const UserStats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <UserActivity>
      <UserActivityItem>
        <ActivityTitle>Followers</ActivityTitle>
        <ActivityValue>{followers}</ActivityValue>
      </UserActivityItem>
      <UserActivityItem>
        <ActivityTitle>Views</ActivityTitle>
        <ActivityValue>{views}</ActivityValue>
      </UserActivityItem>
      <UserActivityItem>
        <ActivityTitle>Likes</ActivityTitle>
        <ActivityValue>{likes}</ActivityValue>
      </UserActivityItem>
    </UserActivity>
  );
};
UserStats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
