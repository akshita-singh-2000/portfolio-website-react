import React from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './Projects.module.css'; 
// import projectImage1 from '../../assets/BrainTumorProject.png';
// import projectImage2 from '../../assets/llm.png';

const CityCards = () => {
  const { theme } = useTheme();

  const cities = [
    {
      name: 'Las Vegas',
      image: '../../assets/BrainTumorProject.png',
      color: 'rgba(138, 43, 226, 0.6)',
    },
    {
      name: 'New York',
      image: '../../assets/llm.png',
      color: 'rgba(0, 255, 255, 0.6)',
    },
    {
      name: 'Singapore',
      image: '../../assets/llm.png',
      color: 'rgba(255, 165, 0, 0.6)',
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <h3 className={styles.sectionDescription}>
        Explore some of my recent work below. <br />
        Got a project idea? Let’s collaborate and create something amazing together!
      </h3>

      <div className={`${styles['city-cards']} ${theme}`}>
        {cities.map((city, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles['image-container']}
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <div className={styles.overlay} style={{ backgroundColor: city.color }}></div>
            </div>
            <div className={styles.content}>
              <h2>{city.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore quisqu madipisicinq elit. Eius labore quisquam illum natus minima placeat sapiente illum natus minima placeat sapiente.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityCards;
