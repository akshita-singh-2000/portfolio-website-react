import React from 'react';
import styles from './projectsStyles.module.css'
import projectImage1 from '../../assets/BrainTumorProject.png';
import projectImage2 from '../../assets/BrainTumorProject.png';
import projectImage3 from '../../assets/llm.png';
import ProjectCard from '../../common/ProjectCard';

function projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects </h1>
      <h3 className='sectionDescription'>Explore some of my recent work below. <br/>
      Got a project idea? Let’s collaborate and create something amazing together! </h3>
      <div className={styles.projectsContainer}>
      <ProjectCard 
            src={projectImage1} 
            link='https://github.com/akshita-singh-2000/MLOps-Brain-Tumor-Classification'
            h3 = " Brain Tumor Classification (MLOps)"
            p = "This project is designed to develop, deploy, and maintain a machine learning model for brain tumor classification. The project utilizes a MLOps approach to streamline the development, deployment, and monitoring of the model."
        />
        <ProjectCard 
            src={projectImage2} 
            link='https://github.com/akshita-singh-2000/Room-Occupancy-Estimation'
            h3 = "Room Occupancy Estimation"
            p = "The primary objective of this project was to develop a room occupancy estimator by building models from scratch. All models were studied in depth, including their underlying conditions, assumptions, and the mathematics behind them"
        />
        <ProjectCard 
            src={projectImage3} 
            link='https://github.com/akshita-singh-2000/MLOps-Brain-Tumor-Classification'
            h3 = "LLM powered Knowledge Graph Creation"
            p = "This project is designed to develop, deploy, and maintain a machine learning model for brain tumor classification. The project utilizes a MLOps approach to streamline the development, deployment, and monitoring of the model."
        />
      </div>
    </section>
  );
}

export default projects
