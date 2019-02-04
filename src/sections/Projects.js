import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './../data.json';
import Icons from './../images';
// components
import Card from './../components/Card';
import {
  Section,
  ScrollFooter,
  ScrollBtn,
  SectionContent
} from './../components/common';
import { P } from './../components/text';

class Projects extends Component {
  handleRef = projectsSec => this.props.getOffsetTop(projectsSec);

  renderProjects = () => {
    return (
      <ProjectsListContainer>
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </ProjectsListContainer>
    );
  };

  render = () => {
    return (
      <ProjectsSection
        id={this.props.id}
        data-offset-id={`${this.props.id}OffsetTop`}
        ref={this.handleRef}>

        <ProjectsContent data-aos="fade-up">
          <ProjectsTitle>Projects</ProjectsTitle>
          {this.renderProjects()}
        </ProjectsContent>

        <ScrollFooter>
          <ScrollBtn to="Contact" label="Contact" icon={Icons.downArrow} />
        </ScrollFooter>
      </ProjectsSection>
    );
  };
}

const ProjectsSection = styled(Section)`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  min-height: 100vh;
  margin-bottom: 0;
  height: auto;
`;

const ProjectsContent = styled(SectionContent)`
  padding-bottom: 100px;
  position: relative;
`;

const ProjectsListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectsTitle = styled(P)`
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

export default Projects;
