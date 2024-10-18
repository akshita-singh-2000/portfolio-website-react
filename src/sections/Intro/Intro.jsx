import React, { useState } from 'react';
import styles from './introStyle.module.css';
import introImg from '../../assets/Profile-pic1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Akshita_Singh_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import { X, Menu } from 'lucide-react'; // Ensure these icons are imported correctly

function Intro() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <section id="intro" className={styles.container}>
            <nav className={`${styles.navbar} ${styles[theme]}`}>
                <div className={`${styles.navbar_menu} ${isMenuOpen ? styles.active : ''}`}>
                    <ul className={styles.navbar_menu_items}>
                        {['Education', 'Projects', 'Interests', 'Skills'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={toggleMenu}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className={styles.menu_toggle} onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            <div className={styles.colorModeContainer}>
                <img className={styles.intro} src={introImg} alt='Profile of Akshita Singh' />
                <img className={styles.colorMode} src={themeIcon} alt='Toggle color mode' onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.hello}>Hello,<br /></h2>
                <h1>I'm Akshita Singh</h1>
                <span>
                    <a href='https://www.linkedin.com/in/singh-akshi/' target='_blank' rel="noopener noreferrer">
                        <img src={linkedinIcon} alt='LinkedIn profile' />
                    </a>
                    <a href='https://github.com/akshita-singh-2000' target='_blank' rel="noopener noreferrer">
                        <img src={githubIcon} alt='GitHub profile' />
                    </a>
                </span>
                <p className={styles.description}>
                    Aspiring data scientist with a strong foundation in data modeling, machine learning, and software development.
                    <br /><br />
                    Passionate about using machine learning to solve real-world problems and drive innovation.
                </p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Intro;
