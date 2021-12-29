import PropTypes from 'prop-types';
import { UserStats } from './UserStats';
import {
  ProfileCard,
  Avatar,
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <UserInfo>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>
      <UserStats stats={stats}></UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

// {
//     "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//         "followers": 5603,
//         "views": 4827,
//         "likes": 1308
//     }
// }
