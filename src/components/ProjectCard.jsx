import { motion } from 'framer-motion';
import './ProjectCard.css';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-image">
        <div className="project-image-placeholder">
          <span>{project.title.charAt(0)}</span>
        </div>
        <div className="project-overlay">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Demo
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Source Code
          </a>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;