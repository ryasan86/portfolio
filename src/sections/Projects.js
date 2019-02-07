import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './../data.json';
import { PROJECT_TYPES } from './../constants';
import { getPageChunk } from './../utils';
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
    activeTab: 0,
    activePageBtn: 0,
    pageChunk: getPageChunk(projects, 0),
    projectsByCategory: projects
  };

  handleRef = projectsSec => this.props.getOffsetTop(projectsSec);

  renderProjectCategories = () => (
    <CategoryContainer>
      {PROJECT_TYPES.map(({ title }, i) => (
        <CategoryLink
          key={i}
          active={this.state.activeTab === i}
          onClick={() => this.handleCategoryClick(i)}>
          {title}
        </CategoryLink>
      ))}
    </CategoryContainer>
  );

  handleCategoryClick = tabId => {
    this.setState({ activeTab: tabId }, () => {
      const { title } = PROJECT_TYPES[this.state.activeTab];
      const projectList = projects.filter(({ type }) => type === title || title === 'All');

      this.setState({
        projectsByCategory: projectList,
        pageChunk: getPageChunk(projectList, 0)
      });
    });
  };

  renderProjects = () => {
    return (
      <ProjectsListContainer>
        {this.state.pageChunk.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </ProjectsListContainer>
    );
  };

  renderPageChunk = id => {
    this.setState({
      pageChunk: getPageChunk(this.state.projectsByCategory, id),
      activePageBtn: id
    });
  };

  renderPageBtns = () => {
    const { projectsByCategory, activePageBtn } = this.state;
    const btns = Array(Math.ceil(projectsByCategory.length / 6)).fill().map((_, i) => {
        return (
          <PageBtn key={i} onClick={() => this.renderPageChunk(i)} active={activePageBtn === i}>
            {i + 1}
          </PageBtn>
        );
      });
    return <div>{btns}</div>;
  };

  render = () => (
    <ProjectsSection
      id={this.props.id}
      data-offset-id={`${this.props.id}OffsetTop`}
      ref={this.handleRef}>

      <ProjectsContent data-aos="fade-up">
        <ProjectsTitle>Projects</ProjectsTitle>
        {this.renderProjectCategories()}
        {this.renderProjects()}
        {this.renderPageBtns()}
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsTitle = styled(P)`
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const CategoryLink = styled.a`
  color: ${({ theme }) => theme.primary};
  margin: 15px;
  min-width: 150px;
  text-align: center;
  padding: 5px;
  transition: background 0.5s;
  cursor: pointer;
  ${({ active, theme }) =>
    active
      ? `background: ${theme.primary};
         color: ${theme.light};`
      : ''}
`;

const ProjectsListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1159px;
`;

const PageBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ active, theme }) => active ? theme.light : theme.secondary};
  background: ${({ active, theme }) => active ? theme.secondary : theme.light};
  transition: background 0.5s;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 15px;
`;

export default Projects;
