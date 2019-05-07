import React from 'react';

import ProjectsContainer from './ProjectsStyles';
import TitleContainer from './../../components/common/Title';
import ProjectList from './../../components/ProjectList/ProjectList';

const Projects = () => (
  <ProjectsContainer id="projects">
    <TitleContainer data-aos="fade-up">
      <p>Projects</p>
      <h2>Checkout some of my stuff</h2>
    </TitleContainer>
    <ProjectList />
  </ProjectsContainer>
);

export default Projects;
