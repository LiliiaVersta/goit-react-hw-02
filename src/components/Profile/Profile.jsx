import styles from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={image} alt="User avatar" />
        <p className={styles.nameTitle}>{name}</p>
        <p className={styles.pTitle}>@{tag}</p>
        <p className={styles.pTitle}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
