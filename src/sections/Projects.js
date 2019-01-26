import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
import { flexCenter } from './../utils/flexCenter';
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
  render = () => {
    return (
      <ProjectsSection id={this.props.id}>
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
  ${flexCenter};
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  min-height: 100vh;
  height: auto;
`;

const ProjectsContent = styled(SectionContent)`
  padding: 0 0 10% 1%;
  position: relative;
`;

const ProjectsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  @media only screen and (max-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

const ProjectsTitle = styled(P)`
  color: ${({ theme }) => theme.dark};
`;

export default Projects;
