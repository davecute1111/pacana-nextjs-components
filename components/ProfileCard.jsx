import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.cardWrapper} id="profile-card">
      <img
        src="thrifter.png"
        alt="profile placeholder"
        className={styles.cardImage}
      />
      <h3 className={styles.cardName}>DAVE VINCENT A. PACAÑA</h3>
      <p className={styles.cardAge}>Age: 18</p>
      <p className={styles.cardDesc}>
        Enjoys thrifting for unique finds
      </p>
    </div>
  );
}
