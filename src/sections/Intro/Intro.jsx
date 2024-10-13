
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

function Intro() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

    return (
        <section id="intro" className={styles.container}>
            <div className='styles.colorModeContainer'>
                <img className={styles.intro} src={introImg} alt='Profile Picture of Akshita Singh'></img>
                <img className={styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
            </div> 
            <div className={styles.info}>
                <h2>
                    Hello, <br/> 
                </h2>
                <h1>I'm Akshita Singh
                </h1>
                <span>
                    <a href='https://www.linkedin.com/in/singh-akshi/' target='_blank'>
                        <img src={linkedinIcon} alt='Linekdin icon'/>
                    </a>
                    <a href='https://github.com/akshita-singh-2000' target='_blank'>
                        <img src={githubIcon} alt='Github icon'/>
                    </a>
                    {/* <a href="mailto:singh.akshi@northeastern.edu">
                        <img src={outlookIcon} alt="Outlook Email Icon"/>
                    </a> */}
                </span>
                <p className={styles.description}> Aspiring data scientist with a strong foundation in data modeling, machine learning, and software development. 
                    <br/><br/>Passionate about using machine learning to solve real-world problems and drive innovation</p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Intro;