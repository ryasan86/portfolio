import React, { Component } from 'react';
import styled from 'styled-components';
// components
import ProjectCard from './ProjectCard';

class ProjectList extends Component {

  render = () => (
    <ProjectsListContainer>
      {this.props.projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </ProjectsListContainer>
  );
}

const ProjectsListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1159px;
`;

export default ProjectList;
