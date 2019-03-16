import React, { Component } from 'react';
import styled from 'styled-components';

import Icons from './../images';
import ProjectList from './../components/ProjectList';
import ProjectCategoryTabs from './../components/ProjectCategoryTabs';
import ProjectPagination from './../components/ProjectPagination';
import {
  Section,
  ScrollFooter,
  ScrollBtn,
  SectionContent
} from './../components/common';
import { projects } from './../data.json';
import { getPageChunk } from './../utils';
import { PROJECT_TYPES } from './../constants';

class Projects extends Component {
  state = {
    activeTab: 0,
    activePageBtn: 0,
    pageChunk: getPageChunk(projects, 0),
    projectsByCategory: projects
  };

  handleSectionRef = projectsSec => this.props.getOffsetTop(projectsSec);

  handleCategoryClick = tabId => {
    this.setState({ activeTab: tabId }, () => {
      const { title } = PROJECT_TYPES[this.state.activeTab];
      const projectList = projects.filter(
        ({ type }) => type === title || title === 'All'
      );

      this.setState({
        projectsByCategory: projectList,
        pageChunk: getPageChunk(projectList, 0),
        activePageBtn: 0
      });
    });
  };

  setActivePage = id => {
    this.setState({
      pageChunk: getPageChunk(this.state.projectsByCategory, id),
      activePageBtn: id
    });
  };

  render = () => {
    const {
      activeTab,
      pageChunk,
      activePageBtn,
      projectsByCategory
    } = this.state;
    const id = this.props.id;

    return (
      <ProjectsSection
        id={id}
        data-offset-id={`${id}OffsetTop`}
        ref={this.handleSectionRef}>
        <ProjectsContent data-aos="fade-up">
          <h2 className="title">Projects</h2>
          <ProjectCategoryTabs
            handleCategoryClick={this.handleCategoryClick}
            activeTab={activeTab}
          />
          <ProjectList projects={pageChunk} />
          <ProjectPagination
            setActivePage={this.setActivePage}
            activePageBtn={activePageBtn}
            projectsByCategory={projectsByCategory}
          />
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
  width: 100%;
  padding-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .title {
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    margin: 2% 0;
  }
`;

export default Projects;
