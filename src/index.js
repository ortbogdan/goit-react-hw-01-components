import React from 'react';
import ReactDOM from 'react-dom';

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from './components';

import { Container } from './App.styled';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
