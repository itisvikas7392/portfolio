import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import './Home.css';

const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '5+', label: 'Happy Clients' },
];

const skills = ['React', 'JavaScript', 'Node.js', 'TypeScript', 'Python', 'MongoDB'];

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-name">Vikas Prajapati</h1>
              <p className="hero-title">Full Stack Developer</p>
              <p className="hero-description">
                Building exceptional digital experiences with modern web technologies. 
                Based in India, available for remote work. Passionate about creating 
                elegant solutions to complex problems.
              </p>

              <div className="hero-skills mb-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag badge bg-secondary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="hero-stats row mb-4 py-3">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="col-4">
                    <motion.div
                      className="stat-item text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <span className="stat-number d-block">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="hero-cta d-flex gap-3">
                <Link to="/projects" className="btn btn-primary btn-lg px-4">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg px-4">
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 text-center mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-container"
            >
              <div className="hero-image position-relative d-inline-block">
                <img src={profileImg} alt="Vikas Prajapati" className="img-fluid rounded-circle" />
                <div className="hero-image-border"></div>
                <div className="hero-badge position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <span className="badge bg-success px-3 py-2">Available for work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;