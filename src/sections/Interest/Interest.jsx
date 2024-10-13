
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
      description: "Machine Learning is more than an API call to Scikit-learn. I love math and theory as well as the implementation."
    },
    {
      Icon: BarChart2,
      title: "Data Analysis",
      description: "I love telling a story. Making beautiful and compelling dashboards and presenting is one of my favorite skills."
    },
    {
      Icon: Cloud,
      title: "Cloud Computing",
      description: "With extensive experience in building end-to-end data pipelines on AWS, I am currently expanding my expertise by mastering Azure through various hands-on projects."
    },
    {
      Icon: MessageSquare,
      title: "NLP",
      description: "I specialize in sentiment analysis and recommendation systems using NLP. Currently exploring LangChain and the RAG framework."
    }
  ];

  return (
    <section id="skills-overview" className={styles.container}>
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