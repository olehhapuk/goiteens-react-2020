import React from 'react';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li class="item">
          <span class="status"></span>
          <img class="avatar" src="" alt="" width="48" />
          <p class="name"></p>
        </li>
      ))}
    </ul>
  );
}
