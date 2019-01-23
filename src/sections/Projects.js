import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionWrap } from './../components/common';

class Projects extends Component {
  render = () => {
    return (
      <ProjectsWrap blue={this.props.blue}>
        <LargeText>Projects</LargeText>
      </ProjectsWrap>
    );
  };
}

const ProjectsWrap = styled(SectionWrap)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ blue, theme }) => blue ? theme.color.secondary : theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  margin-bottom: 30vh;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.light};
`;

const LargeText = styled(Text)`
  font-size: 7em;
  letter-spacing: 0.1em;
  font-weight: 700;
  padding-left: 0px;
`;

export default Projects;
