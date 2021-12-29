import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from './components';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
