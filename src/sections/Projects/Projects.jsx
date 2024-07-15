import styles from './ProjectsStyles.module.css';
import truthFinder from '../../assets/truth_finder.webp';
import checkMate from '../../assets/checkMate.jpeg';
import kamwala from '../../assets/kamWala.webp';
import icoder from '../../assets/icoder-.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={truthFinder}
          link="https://github.com/sharma2609/Fake-news-detection-System"
          h3="Truth Finder"
          p="News Authenticator"
        />
        <ProjectCard
          src={checkMate}
          link="https://github.com/sharma2609/Check-Mate"
          h3="Check - Mate"
          p="ToDo List"
        />
        <ProjectCard
          src={kamwala}
          link="https://github.com/sharma2609/DESKTOP-VOICE-ASSISTANT"
          h3="KamWalaa"
          p="Desktop Voice Assistant"
        />
        <ProjectCard
          src={icoder}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="icoder"
          p="Blogging Website"
        />
      </div>
    </section>
  );
}

export default Projects;