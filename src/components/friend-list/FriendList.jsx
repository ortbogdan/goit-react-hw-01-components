import PropTypes from 'prop-types';
import { FriendsList, Friend, Status, Avatar, Name } from './FriendList.styled';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <Friend>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={'User avatar'}></Avatar>
      <Name>{name}</Name>
    </Friend>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} friend={friend}></FriendListItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
