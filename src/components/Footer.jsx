import { Link } from 'react-router-dom';
import './Footer.css';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.499.047.375-.041.624.168.168-.249.124-.373.124-.124.187.334.498.541.812.629.566-.205 1.078-.467 1.878-1.039-.948.225-1.968-.398-3.003-.523-1.053-.13-2.113-.166-3.091-.166-2.897 0-5.571.685-7.965 2.047-2.385 1.353-4.16 3.454-4.876 5.932-.726 2.494-.686 5.133.116 7.541 1.01 3.042 3.967 4.977 7.207 4.978 1.368 0 2.674-.279 3.864-.797 2.304-.999 4.396-1.801 6.365-1.801 1.959 0 3.801.789 5.232 2.166 1.427-1.377 3.273-2.166 5.232-2.166 1.969 0 4.061.802 6.365 1.801 1.19.518 2.496.797 3.864.797 3.24-.001 6.197-1.936 7.207-4.978.802-2.408.842-5.047.116-7.541-.716-2.478-2.491-4.579-4.876-5.932-2.394-1.362-5.068-2.047-7.965-2.047-.978 0-2.038.036-3.091.166-1.035.125-2.055.298-3.003.523 1.184.919 1.944 2.146 2.073 3.608.017.199-.039.391-.159.529-.12.138-.291.219-.476.227-.185-.008-.364-.101-.474-.247-1.873-2.529-4.223-4.395-7.631-4.395-2.297 0-4.461 1.306-5.837 3.439-1.376-2.133-3.54-3.439-5.837-3.439z' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 mt-5" style={{ background: '#0a0a0f', borderTop: '1px solid #27272a' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/" className="navbar-brand mb-3 d-inline-block">
              <span className="fw-bold">Vikas</span>
              <span className="text-info">.</span>
            </Link>
            <p className="text-secondary small">
              Building amazing digital experiences with modern web technologies.
            </p>
          </div>

          <div className="col-lg-4">
            <h5 className=" fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-secondary">Home</Link></li>
              <li><Link to="/about" className="text-secondary">About</Link></li>
              <li><Link to="/projects" className="text-secondary">Projects</Link></li>
              <li><Link to="/contact" className="text-secondary">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h5 className=" fw-bold mb-3">Connect</h5>
            <div className="d-flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px', background: '#1a1a24', borderRadius: '10px', color: '#a1a1aa' }}
                >
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center py-4 mt-4" style={{ borderTop: '1px solid #27272a' }}>
          <small className="text-secondary">
            &copy; {currentYear} Vikas Prajapati. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;