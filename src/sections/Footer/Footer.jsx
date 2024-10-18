import React from 'react';
import styles from './Footer.module.css';
import { Mail } from 'lucide-react';
import { useTheme } from '../../common/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Connect with Me</h2>
        <div className={styles.emailContainer}>
          <Mail size={24} className={styles.emailIcon} />
          <div className={styles.emailContent}>
            <div className={styles.emailLabel}>Email Address</div>
            <div className={styles.emailAddress}>singh.akshi@northeastern.edu</div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 AKSHITA SINGH | ALL RIGHTS RESEARVED
      </div>
    </footer>
  );
};

export default Footer;