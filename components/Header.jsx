import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerShell} id="hdr-section">
      <h1 className={styles.headerMain}>My Profile</h1>
      <h2 className={styles.headerSub}>DAVE VINCENT A. PACAÑA</h2>
    </header>
  );
}
