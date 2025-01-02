import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      period: "Jan 2024 - Dec 2024",
      title: "Graduate Course Assistant",
      company: "Northeastern University, Boston, MA",
      responsibilities: [
        "Diagnosed and resolved issues, offering hands-on support for debugging and optimizing machine learning models.",
        "Guided 50+ students in advanced data analysis, regression modeling, and hypothesis testing with R and Minitab."
      ],
      skills: ["Machine Learning", "Statistics","Python", "R"]
    },
    {
      period: "Jan 2024 - May 2024",
      title: "Data Analyst",
      company: "Northeastern University, Boston, MA",
      responsibilities: [
        "Engineered and implemented an ETL pipeline to retrieve and process data via 3rd party API, aggregating and structuring data for over 16,000 students using Python.",
        "Utilized text mining and NLP techniques to extract entities, classify, and analyze text-based responses.",
        "Automated weekly data integration into Tableau with a custom Python scheduling script for real-time reporting and trend analysis, saving 5 hours of manual effort per cycle.",
        "Built customized dashboard to track essential KPIs facilitating event management & planning for 20+ ceremonies."
      ],
      skills: ["Data Analysis", "Python", "Tableau", "NLP", "ETL"]
    },
    {
        period: "Aug 2023 - Dec 2023",
        title: "Data Engineer",
        company: "Beam Therapeutics, Cambridge, MA",
        responsibilities: [
          "Architected comprehensive ETL data pipeline using custom scripts and protocols in Python, JavaScript, and YAML.",
          "Executed in-built custom logic for data conversion, cutting external software dependency, reducing costs by 70%.",
          "Designed optimized data schema for structured storage in Amazon Athena, enabling efficient querying and access.",
          "Developed additional pipelines with API integration for third-party application compatibility, reducing manual intervention and processing time by 45 minutes.",
        ],
        skills: ["AWS", "ETL", "Python", "JavaScript", "Dataweave","Data Modeling"]
      },
      {
        period: "Jun 2021 - Jul 2022",
        title: "Data Analyst",
        company: "Sahu Technologies, Mumbai, IN",
        responsibilities: [
          "Leveraged SQL to extract and manipulate data from large-scale relational databases.",
          "Created Power BI dashboard for IT support, automating data extraction via APIs/OData, transforming it with Power Query and reducing manual reporting time by 30%.",
          "Enhanced dashboard performance using data modeling and DAX to create dynamic KPIs, improving load times."
        ],
        skills: ["Python","SQL", "PowerBI", "PowerQuery", "DAX"]
      }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WORK EXPERIENCE</h1>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experience}>
          <div className={styles.header}>
            <div className={styles.period}>{exp.period}</div>
            <h2 className={styles.jobTitle}>{exp.title}</h2>
            <h3 className={styles.company}>{exp.company}</h3>
          </div>
          <div className={styles.content}>
            <ul className={styles.responsibilities}>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <ul className={styles.skills}>
              {exp.skills.map((skill, idx) => (
                <li key={idx} className={styles.skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;