import React from 'react';

import styles from './FriendListItem.module.css';

export default function FriendListItem(props) {
  return (
    <li className="item">
      <span className={props.isOnline ? styles.online : styles.offline}>
        status
      </span>
      <img className="avatar" src={props.avatar} alt="" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
}
