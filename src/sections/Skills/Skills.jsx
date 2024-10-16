import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="R" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="Web (HTML, CSS, JS, React)" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Numpy" />
        <SkillList src={checkMarkIcon} skill=" Scikit-Learn" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="OpenCV" />
        <SkillList src={checkMarkIcon} skill="NLTK" />
        <SkillList src={checkMarkIcon} skill="Langchain" />
        <SkillList src={checkMarkIcon} skill="Visualisation (Seaborn, Matplotlib, plotly)" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill=" RDBMS (MySQL, PostgreSQL)" />
        <SkillList src={checkMarkIcon} skill="Neo4j" />
        <SkillList src={checkMarkIcon} skill="ETL/ELT" />
        <SkillList src={checkMarkIcon} skill="Data Modeling" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill=" Cloud (AWS, GCP)" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Airflow" />
        <SkillList src={checkMarkIcon} skill="Mlflow" />
        <SkillList src={checkMarkIcon} skill="LLMs (GenAI)" />
        <SkillList src={checkMarkIcon} skill="PowerBI" />
        <SkillList src={checkMarkIcon} skill="Tableau" />
      </div>
    </section>
  );
}

export default Skills;