import { useState } from 'react'
import '../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ProjectInput from './ProjectInput';

function CVBuilder() {
  const [cvData, setCvData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    location: 'New York, NY',
    education: 'Bachelor of Science in Computer Science',
    educationStartDate: '2015-09-01',
    educationEndDate: '2019-05-01',
    experience: '2 years as a Frontend Developer',
    experienceStartDate: '2019-06-01',
    experienceEndDate: '2021-06-01',
    projects: [
      {
        name: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my work.',
        link: 'https://portfolio.example.com',
      }
    ],
  });
  const [expandedSections, setExpandedSections] = useState({
    education: true,
    experience: true,
    projects: true
  });
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCvData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const addProject = () => {
    setCvData(prevData => ({
      ...prevData,
      projects: [...prevData.projects, { name: '', description: '', link: '' }]
    }));
    console.log(cvData);
  };

  const removeProject = (index) => {
    setCvData(prevData => ({
      ...prevData,
      projects: prevData.projects.filter((_, i) => i !== index)
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setCvData(prevData => ({
      ...prevData,
      projects: prevData.projects.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };
  return (
    <div className='wrapper'>
      <div className="input-section">
        <h2 className='Personal Details'>Personal Details</h2>
        <label htmlFor="full-name">
          <span className='label-text'>Full Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={cvData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">
          <span className='label-text'>Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={cvData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone-number">
          <span className='label-text'>Phone Number</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={cvData.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="location">
          <span className='label-text'>Location</span>
        </label>
        <input
          type="location"
          name="location"
          placeholder="location"
          value={cvData.location}
          onChange={handleInputChange}
        />
        <h2 onClick={() => toggleSection('education')} style={{ cursor: 'pointer' }}>
          Education {expandedSections.education ? '▼' : '▶'}
        </h2>
        {expandedSections.education && (
          <div className='expendable'>
            <label htmlFor="educationStartDate">
              <span className='label-text'>Education Start Date</span>
            </label>
            <input
              type="date"
              name="educationStartDate"
              value={cvData.educationStartDate}
              onChange={handleInputChange}
            />
            <label htmlFor="educationEndDate">
              <span className='label-text'>Education End Date</span>
            </label>
            <input
              type="date"
              name="educationEndDate"
              value={cvData.educationEndDate}
              onChange={handleInputChange}
            />
            <label htmlFor="Description">
              <span className='label-text'>Description</span>
            </label>
            <input
              type="text"
              name="education"
              value={cvData.education}
              onChange={handleInputChange}
            />
          </div>
        )}

        <h2 onClick={() => toggleSection('experience')} style={{ cursor: 'pointer' }}>
          Experience {expandedSections.experience ? '▼' : '▶'}
        </h2>
        {expandedSections.experience && (
          <div className='expendable'>
            <label htmlFor="experienceStartDate">
              <span className='label-text'>Experience Start Date</span>
            </label>
            <input
              type="date"
              name="experienceStartDate"
              value={cvData.experienceStartDate}
              onChange={handleInputChange}
            />
            <label htmlFor="experienceEndDate">
              <span className='label-text'>Experience End Date</span>
            </label>
            <input
              type="date"
              name="experienceEndDate"
              value={cvData.experienceEndDate}
              onChange={handleInputChange}
            />
            <label htmlFor="Description">
              <span className='label-text'>Description</span>
            </label>
            <input
              type="text"
              name="experience"
              value={cvData.experience}
              onChange={handleInputChange}
            />
          </div>
        )}

        <h2 onClick={() => toggleSection('projects')} style={{ cursor: 'pointer' }}>
          Projects {expandedSections.projects ? '▼' : '▶'}
        </h2>
        {expandedSections.projects && (
          <div className='expendable'>
            {/* Projects inputs */}
            {cvData.projects.map((project, index) => (
              <ProjectInput
                key={index}
                project={project}
                index={index}
                onProjectChange={handleProjectChange}
                onRemoveProject={removeProject}
              />
            ))}

            <button onClick={addProject}>Add Project</button>
          </div>
        )}
      </div>
      <div className="cv-preview">
        <div className='personal-info'>
          <h1>{cvData.name}</h1>
          <div className='bottom-row'>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> {cvData.email}
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> {cvData.phone}
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> {cvData.location}
            </p>
          </div>
        </div>
        <h2>Education</h2>
        <div className="date-and-description">
          <p className="dates">from: {cvData.educationStartDate} to: {cvData.educationEndDate}</p>
          <p>{cvData.education}</p>
        </div>
        <h2>Experience</h2>
        <div className="date-and-description">
          <p className="dates">from: {cvData.experienceStartDate} to: {cvData.experienceEndDate}</p>
          <p>{cvData.experience}</p>
        </div>
        <h2>Projects</h2>
        {cvData.projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVBuilder;