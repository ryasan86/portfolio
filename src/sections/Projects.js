import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
import { DOWN_ARROW } from './../images';
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
  handleRef = projectsSec => {
    this.props.getOffsetTop(projectsSec);
  };

  render = () => {
    return (
      <ProjectsSection
        id={this.props.id}
        data-offset-id={`${this.props.id}OffsetTop`}
        ref={this.handleRef}>
        <ProjectsContent data-aos="fade-up">
          <TitleContainer>
            <ProjectsTitle>Projects</ProjectsTitle>
          </TitleContainer>
          <ProjectsListContainer>
            {data.projects.map((project, i) => {
              return <Card key={i} project={project} />;
            })}
          </ProjectsListContainer>
        </ProjectsContent>
        <ScrollFooter>
          <ScrollBtn to="Contact" label="Contact" icon={DOWN_ARROW} />
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
  flex-wrap: wrap;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

const ProjectsTitle = styled(P)`
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
`;

export default Projects;
