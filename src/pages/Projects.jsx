import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import './Projects.css';

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  return (
    <section className="projects section py-5">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">
            My <span className="text-info">Projects</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`btn ${activeCategory === category ? 'btn-info' : 'btn-outline-secondary'} rounded-pill px-4`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-4">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="col-md-6 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card h-100 bg-dark border-0" style={{ background: '#13131a' }}>
                  <div className="card-img-top position-relative overflow-hidden" style={{ height: '200px', background: '#1a1a24' }}>
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <h2 className="display-1 text-info opacity-25">{project.title.charAt(0)}</h2>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-3" style={{ background: 'rgba(0,0,0,0.8)' }}>
                      <a href={project.demoUrl} className="btn btn-info btn-sm">Live Demo</a>
                      <a href={project.repoUrl} className="btn btn-outline-light btn-sm">Source</a>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <span className="badge bg-info-subtle text-info mb-2">{project.category}</span>
                    <h4 className="h5 fw-bold mb-2">{project.title}</h4>
                    <p className="text-secondary small mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="badge bg-secondary-subtle text-secondary">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-secondary">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;