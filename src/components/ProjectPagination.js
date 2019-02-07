import React, { Component } from 'react';
import styled from 'styled-components';

class ProjectPagination extends Component {
  render = () => {
    const { projectsByCategory, activePageBtn } = this.props;
    const PageBtns = Array(Math.ceil(projectsByCategory.length / 6))
      .fill()
      .map((_, i) => {
        return (
          <PageBtn
            key={i}
            onClick={() => this.props.setActivePage(i)}
            active={activePageBtn === i}>
            {i + 1}
          </PageBtn>
        );
      });
    return <BtnContainer>{PageBtns}</BtnContainer>;
  };
}

const BtnContainer = styled.div`
  padding: 20px;
`;

const PageBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ active, theme }) => (active ? theme.light : theme.primary)};
  background: ${({ active, theme }) => (active ? theme.primary : theme.light)};
  transition: background 0.5s;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 15px;
  outline: none;
`;

export default ProjectPagination;
