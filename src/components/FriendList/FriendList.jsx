import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
export default function FriendList({ friends }) {
  //   console.log(friends);
  const friendsArr = friends.map((friend) => {
    return (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={styles.friendList}>{friendsArr}</ul>;
}
