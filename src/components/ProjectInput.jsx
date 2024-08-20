import PropTypes from 'prop-types';

function ProjectInput({ project, index, onProjectChange, onRemoveProject }) {
  return (
    <div className="project-input">
      <label htmlFor="projectName">Project Name</label>
      <input
        type="text"
        placeholder="Project Name"
        value={project.name}
        onChange={(e) => onProjectChange(index, 'name', e.target.value)}
      />
      <label htmlFor="projectDescription">Description</label>
      <input
        type="text"
        placeholder="Project Description"
        value={project.description}
        onChange={(e) => onProjectChange(index, 'description', e.target.value)}
      />
      <label htmlFor="projectLink">Link</label>
      <input
        type="text"
        placeholder="Project Link"
        value={project.link}
        onChange={(e) => onProjectChange(index, 'link', e.target.value)}
      />
      <button className='remove-button' onClick={() => onRemoveProject(index)}>Remove</button>
    </div>
  );
}

ProjectInput.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  onRemoveProject: PropTypes.func.isRequired,
};

export default ProjectInput;
