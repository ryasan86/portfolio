import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './../data.json';
import { PROJECT_TYPES } from './../constants';
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
  state = {
    activeId: 0
  };

  handleRef = projectsSec => this.props.getOffsetTop(projectsSec);

  handleLinkClick = tabId => {
    this.setState({ activeId: tabId });
  };

  renderProjectsNav = () => (
    <TypeContainer>
      {PROJECT_TYPES.map(({ title }, i) => (
        <TypeLink
          key={i}
          active={this.state.activeId === i}
          onClick={() => this.handleLinkClick(i)}>
          {title}
        </TypeLink>
      ))}
    </TypeContainer>
  );

  renderProjects = () => {
    const { title } = PROJECT_TYPES[this.state.activeId];
    const projectList = projects.filter(({ type }) => type === title || title === 'All');

    return (
      <ProjectsListContainer>
        {projectList.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </ProjectsListContainer>
    );
  };

  render = () => (
    <ProjectsSection
      id={this.props.id}
      data-offset-id={`${this.props.id}OffsetTop`}
      ref={this.handleRef}>

      <ProjectsContent data-aos="fade-up">
        <ProjectsTitle>Projects</ProjectsTitle>
        {this.renderProjectsNav()}
        {this.renderProjects()}
      </ProjectsContent>

      <ScrollFooter>
        <ScrollBtn to="Contact" label="Contact" icon={Icons.downArrow} />
      </ScrollFooter>
    </ProjectsSection>
  );
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
  width: 100%;
  padding-bottom: 100px;
  position: relative;
`;


const TypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const TypeLink = styled.a`
  color: ${({ theme }) => theme.primary};
  margin: 15px;
  min-width: 150px;
  text-align: center;
  padding: 5px;
  transition: background 0.5s;
  cursor: pointer;
  ${({ active, theme }) =>
    active ? `background: ${theme.primary};
              color: ${theme.light};`
            : ''}
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
