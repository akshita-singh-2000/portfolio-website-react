import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './Projects.module.css'; 
import projectImage1 from '../../assets/BrainTumorProject.png';
import projectImage2 from '../../assets/llm.jpg';
import projectImage3 from '../../assets/roomOccupancy.jpg';
import projectImage4 from '../../assets/churn.jpeg';
import projectImage5 from '../../assets/walmart.jpg';

const CityCards = () => {
  const { theme } = useTheme();

  const cities = [
    {
      name: 'Brain Tumor Classification',
      image: projectImage1,
      color: 'rgba(138, 43, 226, 0.2)',
      description: 'Developed and deployed a brain tumor classification model using MLOps to streamline workflows. Automated data preprocessing, model training, and retraining with Apache Airflow, and managed CI/CD workflows on GCP via GitHub Actions. Built a Tableau dashboard for real-time monitoring using parsed log data stored in PostgreSQL.',
      githubUrl: 'https://github.com/akshita-singh-2000/MLOps-Brain-Tumor-Classification'
    },
    {
      name: 'AI Powered Knowledge Graph Creation & Querying Using GraphRAG',
      image: projectImage2,
      color: 'rgba(0, 255, 255, 0.2)',
      description: 'Developed a system leveraging LLMs and prompt engineering to generate knowledge graphs from unstructured and semi-structured data, automating Cypher query generation for Neo4j. Built a Streamlit-based chatbot to answer user queries and provide corresponding Cypher queries.',
      githubUrl: 'https://github.com/yourusername/knowledge-graph-graphrag'
    },
    {
      name: 'Room Occupancy Estimation (Model Building)',
      image: projectImage3,
      color: 'rgba(255, 165, 0, 0.2)',
      description: 'The primary objective of this project was to develop a room occupancy estimator by constructing models from scratch. All models were studied in depth, including their underlying conditions, assumptions, and the mathematics behind them.',
      githubUrl: 'https://github.com/akshita-singh-2000/room-occupancy-estimation'
    },
    {
      name: 'Walmart Sales Forecasting',
      image: projectImage5,
      color: 'rgba(34,139,34, 0.4)',
      description: '',
      githubUrl: 'https://github.com/akshita-singh-2000/Walmart-Sales-Forcasting'
    },
    {
      name: 'Skin Leasion Detection',
      image: projectImage2,
      color: 'rgba(249, 105, 14, 0.2)',
      description: '',
      githubUrl: 'https://github.com/akshita-singh-2000/Skin-lesion-detection'
    },
    {
      name: 'Telecom Churn Prediction',
      image: projectImage4,
      color: 'rgba(255,20,147, 0.3)',
      description: '',
      githubUrl: 'https://github.com/akshita-singh-2000/Telcom-company-churn-prediction'
    }
    
  ];

  return (
    <section id="projects" className={`${styles.container} ${styles[theme]}`}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <h3 className={styles.sectionDescription}>
        Explore some of my recent work below. <br />
        Got a project idea? Let's collaborate and create something amazing together!
      </h3>

      <div className={styles['city-cards']}>
        {cities.map((city, index) => (
          <a 
            key={index} 
            href={city.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <div
                className={styles['image-container']}
                style={{ backgroundImage: `url(${city.image})` }}
              >
                <div className={styles.overlay} style={{ backgroundColor: city.color }}></div>
              </div>
              <div className={styles.content}>
                <h2>{city.name}</h2>
                <p>{city.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CityCards;
