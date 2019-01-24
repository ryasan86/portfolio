import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
// components
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
        <ProjectsContent>
          <h3>Projects</h3>
          <ProjectsListContainer>
            {data.projects.map(({ title }, i) => {
              return <ProjectItem key={i}>{title}</ProjectItem>;
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

const ProjectsContent = styled(SectionContent)``;

const ProjectItem = styled.div``;

const ProjectsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const ProjectsWrap = styled(SectionWrap)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  margin-bottom: 30%;
  position: relative;
`;

export default Projects;
