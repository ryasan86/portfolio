import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
import { flexCenter } from './../utils/flexCenter';
// components
import Card from './../components/Card';
import {
  Section,
  ScrollFooter,
  ScrollFooterButton,
  SectionContent
} from './../components/common';

class Projects extends Component {
  render = () => {
    return (
      <ProjectsSection id={this.props.id}>
        <ProjectsContent data-aos="fade-up">
          <TitleContainer>
            <h3>Projects</h3>
          </TitleContainer>
          <ProjectsListContainer>
            {data.projects.map((project, i) => {
              return <Card key={i} project={project} />;
            })}
          </ProjectsListContainer>
        </ProjectsContent>
        <ScrollFooter>
          <ScrollFooterButton to="Contact" />
        </ScrollFooter>
      </ProjectsSection>
    );
  };
}

const ProjectsSection = styled(Section)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  min-height: 100vh;
  height: auto;
`;

const ProjectsContent = styled(SectionContent)`
  ${flexCenter};
  flex-direction: column;
  padding: 0 0 10% 1%;
  position: relative;
  top: 50px;
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
`;

export default Projects;
