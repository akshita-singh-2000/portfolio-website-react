import React from 'react';
import styles from './Education.module.css';
import { useTheme } from '../../common/ThemeContext';
import northeasternLogo from '../../assets/NortheasternLogo.png';
import mumbaiLogo from '../../assets/MumbaiLogo.png';


const EducationEntry = ({ logo, degree, university, courses, date, gpa }) => {
    const { theme } = useTheme();
    return (
      <div className={`${styles.educationEntry} ${styles[theme]}`}>
        <img src={logo} alt={university} className={styles.universityLogo} />
        <div className={styles.content}>
          <div className={styles.degreeBox}>
            <h3 className={styles.degree}>{degree}</h3>
            <h4 className={styles.university}>{university}</h4>
          </div>
          <p className={styles.coursesTitle}>Relevant Courses:</p>
          <ul className={styles.coursesList}>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={styles.info}>
          <span className={styles.date}>{date}</span>
          <span className={styles.gpa}>GPA: {gpa}</span>
        </div>
      </div>
    );
  };
  
  function Education() {
    const educationData = [
      {
        logo: northeasternLogo,
        degree: "Master of Science, Data Analytics Engineering",
        university: "Northeastern University, Boston",
        courses: [
          "Neural Networks/Deep Learning",
          "Machine Learning Operations",
          "Statistical Learning for Engineering",
          "Data Management for Analytics",
          "Computation and Visualization for Analytics"
        ],
        date: "Sep 22-Dec 24",
        gpa: "3.9"
      },
      {
        logo: mumbaiLogo,
        degree: "Bachelor of Engineering, Information Technology",
        university: "University of Mumbai",
        courses: [
          "Web Development",
          "Software Engineering & Project Management",
          "Advanced Data Structure and Algorithms",
          "Data Mining & Business Intelligence",
          "Cloud Computing and Services"
        ],
        date: "Aug 18-Jun 22",
        gpa: "3.8"
      }
    ];
  
    return (
      <section id="education" className={styles.container}>
        <h1 className={styles.sectionTitle}>Education</h1>
        <div className={styles.educationList}>
          {educationData.map((edu, index) => (
            <EducationEntry key={index} {...edu} />
          ))}
        </div>
      </section>
    );
  }
  
  export default Education;