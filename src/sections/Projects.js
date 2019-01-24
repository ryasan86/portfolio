import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
import { flexCenter } from './../utils/flexCenter';
// components
import Card from './../components/Card';
import {
  SectionWrap,
  ScrollFooter,
  ScrollFooterButton,
  SectionContent
} from './../components/common';

class Projects extends Component {
  render = () => {
    return (
      <ProjectsWrap>
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
      </ProjectsWrap>
    );
  };
}

const ProjectsContent = styled(SectionContent)`
  ${flexCenter};
  width: 100%;
  top: 10%;
  position: absolute;
  flex-direction: column;
  padding-left: 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const ProjectsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
`;

const ProjectsWrap = styled(SectionWrap)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  margin-bottom: 30%;
  position: relative;
  overflow-y: scroll;
`;

export default Projects;
