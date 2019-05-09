import React from 'react';

import ProjectItemContainer from './ProjectItemStyles';
import Parallax from './../Parallax/Parallax';

const ProjectItem = ({ idx, project }) => (
  <ProjectItemContainer idx={idx} img={project.img}>
    <Parallax className="parallax">
      <div className="img" onClick={() => window.open(project.url, '_blank')} />
    </Parallax>
    <div className="text" data-aos="fade-up">
      <h4>{project.type}</h4>
      <h2><a href="#home">{project.title}</a></h2>
      <small>{project.tools.join(' | ')}</small>
      <p>{project.description}</p>
      <p><a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a></p>
    </div>
  </ProjectItemContainer>
);

export default ProjectItem;
