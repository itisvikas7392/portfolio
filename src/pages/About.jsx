import { motion } from 'framer-motion';
import './About.css';

const skills = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Python', level: 80 },
  { name: 'MongoDB', level: 78 },
];

const technologies = [
  'React', 'Vue', 'Node.js', 'Express', 'Python', 'Django',
  'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Redis',
  'Git', 'Docker', 'AWS', 'Figma', 'REST APIs', 'GraphQL',
];

function About() {
  return (
    <section className="about section py-5">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">
            About <span className="text-info">Me</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            I'm a passionate Full Stack Developer with a strong foundation in building 
            modern web applications.
          </p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-dark border-0 h-100"
              style={{ background: '#13131a' }}
            >
              <div className="card-body p-4">
                <h3 className="h4 fw-bold mb-4 text-info">Who I Am</h3>
                <p className="text-secondary mb-3">
                  I'm a passionate Full Stack Developer with a strong foundation in building 
                  modern web applications. I love turning complex problems into simple, beautiful 
                  solutions.
                </p>
                <p className="text-secondary mb-4">
                  With experience in both frontend and backend development, I specialize in 
                  creating responsive, user-friendly applications using the latest technologies. 
                  I'm always eager to learn new skills and stay updated with industry trends.
                </p>

                <div className="row g-3 mt-4">
                  <div className="col-4">
                    <div className="text-center p-3 rounded" style={{ background: '#1a1a24' }}>
                      <h3 className="h2 fw-bold text-info mb-1">2+</h3>
                      <small className="text-secondary">Years Exp.</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center p-3 rounded" style={{ background: '#1a1a24' }}>
                      <h3 className="h2 fw-bold text-info mb-1">10+</h3>
                      <small className="text-secondary">Projects</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center p-3 rounded" style={{ background: '#1a1a24' }}>
                      <h3 className="h2 fw-bold text-info mb-1">5+</h3>
                      <small className="text-secondary">Clients</small>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-dark border-0 h-100"
              style={{ background: '#13131a' }}
            >
              <div className="card-body p-4">
                <h3 className="h4 fw-bold mb-4 text-info">Skills</h3>
                <div className="d-flex flex-column gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px', background: '#1a1a24' }}>
                        <motion.div
                          className="progress-bar bg-info"
                          role="progressbar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-5 pt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="h4 fw-bold mb-4 text-center text-info">Technologies I Work With</h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="badge fs-6 px-3 py-2"
                style={{ background: '#1a1a24', color: '#a1a1aa' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;