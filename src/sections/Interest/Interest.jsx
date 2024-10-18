
import React from 'react';
import styles from './Interest.module.css';
import { Brain, BarChart2, Cloud, MessageSquare } from 'lucide-react';
import { useTheme } from '../../common/ThemeContext';

const SkillCard = ({ Icon, title, description }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.skillCard}>
      <Icon className={`${styles.skillIcon} ${styles[theme]}`} />
      <h3 className={styles.skillTitle}>{title}</h3>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
};

function SkillsOverview() {
  const skills = [
    {
      Icon: Brain,
      title: "Machine Learning",
      description: "For me, machine learning goes beyond just making API calls to Scikit-learn. I have a deep passion for understanding the underlying math and theory, as well as the hands-on implementation of these concepts."
    },
    {
      Icon: BarChart2,
      title: "Data Analysis",
      description: "Data analysis is one of my key strengths, and I love diving deep into large datasets to create compelling dashboards that tell a story. I enjoy working with tools like Tableau, Power BI, and Flourish, among others."
    },
    {
      Icon: Cloud,
      title: "Cloud Computing",
      description: "With extensive experience in building end-to-end data pipelines on AWS, I am currently broadening my cloud computing skill set by gaining in-depth experience with Azure through a variety of hands-on projects."
    },
    {
      Icon: MessageSquare,
      title: "LLMs/GenAI",
      description: "I am actively exploring the capabilities of different LLMs and learning how to craft effective prompts. Currently, I’m working with GraphRAG and researching libraries related to Named Entity Recognition and Resolution (NER)."
    }
  ];

  return (
    <section id="Interests" className={styles.container}>
      <h1 className="sectionTitle">Area of Interest</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsOverview;