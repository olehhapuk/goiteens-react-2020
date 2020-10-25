import React from 'react';

import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  console.log(props);
  return (
    <ul className="friend-list">
      {props.friends.map((elem) => {
        return (
          <FriendListItem
            key={elem.id}
            avatar={elem.avatar}
            name={elem.name}
            isOnline={elem.isOnline}
          />
        );
      })}
    </ul>
  );
}
