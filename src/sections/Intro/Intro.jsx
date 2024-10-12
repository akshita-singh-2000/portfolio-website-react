
import styles from './introStyle.module.css';
import introImg from '../../assets/profile_pic.png';
import themeIcon from '../../assets/sun.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import githubIcon from '../../assets/github-light.svg';


function Intro() {
    return (
        <section id="intro" className={styles.container}>
            <div className='styles.colorModeContainer'>
                <img className={styles.intro} src={introImg} alt='Profile Picture of Akshita Singh'></img>
                <img className={styles.colorMode} src={themeIcon} alt='Color mode icon'/>
            </div> 
            <div className={styles.info}>
                <h1>Akshita <br/>
                Singh
                </h1>
                <h2>
                    Data Scientist/ Data Analyst
                </h2>
                <span>
                    <a href='https://www.linkedin.com/in/singh-akshi/' target='_blank'>
                        <img src={linkedinIcon} alt='Linekdin icon'/>
                    </a>
                    <a href='https://github.com/akshita-singh-2000' target='_blank'>
                        <img src={githubIcon} alt='GUthub icon'/>
                    </a>
                </span>
            </div>
        </section>
    );
}

export default Intro;