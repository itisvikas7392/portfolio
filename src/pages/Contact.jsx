import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactInfo = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email', 
      value: 'itisvikasprajapati@gmail.com'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-13 13s-13-6-13-13c0-1.3.2-2.5.6-3.6L3 16l4-2.5c1.1.4 2.3.6 3.6.6 3.9 0 9-6 9-13z"/>
        </svg>
      ),
      label: 'Location', 
      value: 'India (Remote)'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: 'Availability', 
      value: 'Open to work'
    },
  ];

  return (
    <section className="contact section py-5">
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3">
            Get In <span className="text-info">Touch</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            I'm always open to discussing new projects and opportunities
          </p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="h4 fw-bold mb-4 text-info">Let's Connect</h3>
              <p className="text-secondary mb-4">
                Feel free to reach out if you have any questions or just want to say hi.
              </p>

              <div className="d-flex flex-column gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="d-flex align-items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="icon-box d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', background: '#1a1a24', borderRadius: '12px', color: '#22d3ee' }}>
                      {item.icon}
                    </div>
                    <div>
                      <small className="d-block text-secondary">{item.label}</small>
                      <span className="fw-medium">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-dark border-0 p-4"
              style={{ background: '#13131a' }}
            >
              <form onSubmit={handleSubmit} className="card-body p-0">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Name</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-0 py-3"
                      style={{ background: '#1a1a24' }}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      className="form-control bg-dark border-0 py-3"
                      style={{ background: '#1a1a24' }}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium">Subject</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-0 py-3"
                      style={{ background: '#1a1a24' }}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium">Message</label>
                    <textarea
                      className="form-control bg-dark border-0 py-3"
                      style={{ background: '#1a1a24' }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message..."
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-info w-100 py-3 fw-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      ) : null}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                  {submitStatus === 'success' && (
                    <div className="col-12">
                      <div className="alert alert-success d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="me-2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        Message sent successfully!
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;