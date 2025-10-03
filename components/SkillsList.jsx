import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <section className={styles.skillsArea} id="skills-block">
      <h3 className={styles.skillsHeading}>Skills</h3>
      <ul className={styles.skillsItems}>
        <li className={styles.skillTag}>Java</li>
        <li className={styles.skillTag}>Singing</li>
        <li className={styles.skillTag}>Dancing</li>
      </ul>
    </section>
  );
}
