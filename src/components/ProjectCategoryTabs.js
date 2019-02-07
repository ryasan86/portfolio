import React, { Component } from 'react';
import styled from 'styled-components';
import { PROJECT_TYPES } from './../constants';

class ProjectCategoryTabs extends Component {
  render = () => (
    <CategoryContainer>
      {PROJECT_TYPES.map(({ title }, i) => (
        <CategoryLink
          key={i}
          active={this.props.activeTab === i}
          onClick={() => this.props.handleCategoryClick(i)}>
          {title}
        </CategoryLink>
      ))}
    </CategoryContainer>
  );
}

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
export default ProjectCategoryTabs;
