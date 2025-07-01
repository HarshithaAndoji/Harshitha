import React, { useEffect,useState ,useRef} from "react";
import { CiMenuBurger } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilephoto from './Assets/profilephoto.jpeg'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaJs, FaSass,FaCloud  } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import "./skills.css"; 
import { FaLaptopCode, FaTools, FaCloudUploadAlt, FaChalkboardTeacher, FaLayerGroup } from "react-icons/fa";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaDownload } from 'react-icons/fa';

const projectsData = [
  {
    title: "Static OTS and ORVL for UG and PG",
    icon: <FaChalkboardTeacher />,
    description: "Developed static interfaces focusing on responsive UI/UX for exam preparation and video lectures without backend integration."
  },
  {
    title: "Dynamic OTS and ORVL for UG and PG",
    icon: <FaLaptopCode />,
    description: "Built dynamic versions with backend support for real-time exam series and video lecture interaction."
  },
  {
    title: "Practice Question Bank (PQB)",
    icon: <FaDatabase />,
    description: "Created a platform for IIT JEE aspirants with instant feedback, solutions, and flexible test control."
  },
  {
    title: "Dynamic Website Themes Change",
    icon: <FaTools />,
    description: "Enabled admin-driven content changes on a static website, simplifying content updates."
  },
  {
    title: "Banner Edit Tool",
    icon: <FaTools />,
    description: "Built reusable UI components for managing banners efficiently within the website interface."
  },
  {
    title: "Azure Blob Storage Integration",
    icon: <FaCloudUploadAlt />,
    description: "Secure CRUD operations with Azure Blob Storage for efficient data handling and access control."
  },
  {
    title: "Image/Text JSON Generator",
    icon: <FaLayerGroup />,
    description: "Tool to generate JSON from text and images, streamlining data processing for various applications."
  },
  {
    title: "Uploader Tool for Storage",
    icon: <FaCloudUploadAlt />,
    description: "Developed a document uploader for text/images with secure, organized storage solutions."
  }
];


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}





const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-dark text-white py-3 sticky-top shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 fw-bold mb-0 text-uppercase">Harshitha</h1>

        <button
          className="btn text-white d-md-none"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <CiMenuBurger size={28} />
        </button>
      </div>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <nav className="text-center mt-3">
          <ul className="navbar-nav d-md-flex flex-md-row justify-content-center gap-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <li key={section} className="nav-item">
                <a className="nav-link text-white fw-semibold" href={`#${section.toLowerCase()}`}>
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};







const Home = () => (
  <section id="home" className="py-5 bg-light text-center">
    <div className="container">
      <h2 className="display-4 fw-bold mb-3">
        Hi, I'm <span className="text-gradient">Harshitha Andoji</span>
      </h2>
      <h5 className="text-muted mb-4">
        Full-Stack Web Developer | MERN Stack Specialist | React.js & Node.js Enthusiast
      </h5>

      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <span className="badge bg-primary text-white p-3 fs-6"><FaReact className="me-2" /> React.js</span>
        <span className="badge bg-success text-white p-3 fs-6"><FaNodeJs className="me-2" /> Node.js</span>
        <span className="badge bg-dark text-white p-3 fs-6"><FaDatabase className="me-2" /> MongoDB</span>
        <span className="badge bg-info text-dark p-3 fs-6"><SiMysql className="me-2" /> MySQL</span>
      </div>
    </div>
  </section>
);


const About = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container">
      <div className="row align-items-center">
        {/* Left: Text Content */}
        <div className="col-md-8">
          <h2 className="mb-4">👨‍💻 About Me</h2>
          <p className="lead">
            I'm a <strong>Full-Stack Web Developer</strong> with <strong>1 year 11 months</strong> of experience
            building dynamic, scalable, and user-friendly web applications.
          </p>
          <p>
            I specialize in <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>, delivering seamless front-end experiences and robust back-end solutions.
          </p>
          <p>
            I enjoy crafting <strong>educational platforms</strong>, <strong>exam systems</strong>, and solving real-world problems with clean, maintainable code.
          </p>

          <h4 className="mt-4"><FaGraduationCap className="me-2" />Education</h4>
          <ul className="list-unstyled ms-3">
            <li><FaUniversity className="me-2 text-primary" />MCA - Osmania University</li>
            <li><FaUniversity className="me-2 text-primary" />BSc (Computer Science) - St. Pious X Degree and PG College</li>
          </ul>
        </div>

        {/* Right: Optional Avatar or Illustration */}
        <div className="col-md-4 text-center mt-4 mt-md-0">
          <img
            src={profilephoto}
            alt="Profile"
            className="img-fluid rounded-circle shadow-sm"
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>
    </div>
  </section>
);


// const Skills = () => {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             observer.unobserve(entry.target);   // fire once per card
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardRefs.current.forEach(card => card && observer.observe(card));
//     return () => observer.disconnect();
//   }, []);

//   /* helper for cleaner JSX */
//   const Card = ({ title, className, children, idx }) => (
//     <div className="col-md-4 col-sm-6 mb-4">
//       <div
//         ref={el => (cardRefs.current[idx] = el)}
//         className={`card border-0 shadow-sm p-4 rounded-4 h-100 skill-card ${className}`}
//       >
//         <h5 className="mb-3">{title}</h5>
//         {children}
//       </div>
//     </div>
//   );

//   return (
//     <section id="skills" className="py-5 bg-light">
//       <div className="container">
//         <h2 className="mb-5 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <div className="row text-center g-4">

//           {/* Frontend */}
//           <Card title="Frontend" className="text-primary" idx={0}>
//             <div className="d-flex flex-wrap justify-content-center gap-3 fs-3">
//               <FaReact title="ReactJS" />
//               <FaHtml5 title="HTML5" />
//               <FaCss3Alt title="CSS3" />
//               <FaSass title="Sass" />
//               <FaJs title="JavaScript" />
//             </div>
//           </Card>

//           {/* Backend */}
//           <Card title="Backend" className="text-success" idx={1}>
//             <div className="d-flex flex-wrap justify-content-center gap-3 fs-3">
//               <FaNodeJs title="NodeJS" />
//               <SiExpress title="ExpressJS" />
//             </div>
//           </Card>

//           {/* Database */}
//           <Card title="Database" className="text-warning" idx={2}>
//             <div className="d-flex flex-wrap justify-content-center gap-3 fs-3">
//               <SiMysql title="MySQL" />
//               <SiMongodb title="MongoDB" />
//               <FaDatabase title="General DB" />
//             </div>
//           </Card>

//           {/* APIs & Tools */}
//           <div className="col-md-6 mx-auto">
//             <div
//               ref={el => (cardRefs.current[3] = el)}
//               className="card border-0 shadow-sm p-4 rounded-4 h-100 text-info skill-card"
//             >
//               <h5 className="mb-3">APIs &amp; Tools</h5>
//               <div className="d-flex flex-wrap justify-content-center gap-3 fs-3">
//                 <FaCloud title="Azure Blob Storage" />
//                 <i className="fas fa-network-wired" title="RESTful APIs"></i>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };




const skillData = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-danger" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-primary" },
  { icon: <FaJs />, name: "JavaScript", color: "text-warning" },
  { icon: <FaReact />, name: "ReactJS", color: "text-info" },
  { icon: <FaSass />, name: "Sass", color: "text-pink" },
  { icon: <FaNodeJs />, name: "NodeJS", color: "text-success" },
  { icon: <SiExpress />, name: "ExpressJS", color: "text-dark" },
  { icon: <SiMysql />, name: "MySQL", color: "text-primary" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-success" },
  { icon: <FaDatabase />, name: "General DB", color: "text-secondary" },
  { icon: <FaCloud />, name: "Azure Blob", color: "text-info" },
  { icon: <i className="fas fa-network-wired" />, name: "RESTful APIs", color: "text-secondary" },
];

const Skills = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-5 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="row g-4 justify-content-center">
          {skillData.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div
                ref={el => (cardRefs.current[index] = el)}
                className={`card text-center p-3 border-0 shadow-sm rounded-4 skill-card ${skill.color}`}
              >
                <div className="fs-2 mb-2">{skill.icon}</div>
                <div className="fw-semibold">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-5 text-center">Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm border-0 hover-effect">
              <div className="card-body">
                <div className="icon mb-3 text-primary fs-2">{project.icon}</div>
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Message sent! 🚀"); // Simulated alert
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="bg-white shadow p-4 rounded mb-4">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p><FaEnvelope className="me-2 text-primary" /> andojiharshitha194@gmail.com</p>
              <p><FaPhoneAlt className="me-2 text-primary" /> +91 9121325626</p>
              <p>
                <a href="https://linkedin.com/in/harshitha-andoji" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <FaLinkedin className="me-2 text-primary" /> LinkedIn Profile
                </a>
              </p>
              <p>
                <a href="https://github.com/HarshithaAndoji" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <FaGithub className="me-2 text-dark" /> GitHub Portfolio
                </a>
              </p>
              <a href="/resume.pdf" download className="btn btn-success mt-3">
                <FaDownload className="me-2" /> Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="bg-white shadow p-4 rounded">
              <h5 className="fw-bold mb-4">Send a Message</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <small>© 2025 Harshitha. All rights reserved.</small>
    </div>
  </footer>
);

export default App;
