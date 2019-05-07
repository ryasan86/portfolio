import React from 'react';

import ProjectItem from './../ProjectItem/ProjectItem';
import ProjectListContainer from './ProjectListStyles';
import { projects } from '../../constants';

const ProjectList = () => (
  <ProjectListContainer>
    {projects.map((project, i) => (
      <ProjectItem key={project.title} idx={i} project={project} />
    ))}
  </ProjectListContainer>
);

export default ProjectList;
