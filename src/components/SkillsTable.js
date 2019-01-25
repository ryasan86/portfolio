import React, { Fragment } from 'react';
import data from './../data.json';
import styled from 'styled-components';

const SkillsStyledTable = () => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <BraceTd>{'['}</BraceTd>
          <td />
          <td />
          <td />
          <td />
        </tr>
        {data.skills.map(({ name, value }, i) => {
          return (
            <Fragment key={i}>
              <tr>
                <EmptyTd />
                <BraceTd>{'{'}</BraceTd>
                <EmptyTd />
                <EmptyTd />
                <EmptyTd />
              </tr>
              <tr>
                <EmptyTd />
                <EmptyTd />
                <StyledTd>"name":"{name}",</StyledTd>
                <EmptyTd />
                <EmptyTd />
              </tr>
              <tr>
                <EmptyTd />
                <EmptyTd />
                <StyledTd>"value": {value}</StyledTd>
                <EmptyTd />
                <EmptyTd />
              </tr>
              <tr>
                <EmptyTd />
                <BraceTd>{i < data.skills.length - 1 ? '},' : '}'}</BraceTd>
                <EmptyTd />
                <EmptyTd />
                <EmptyTd />
              </tr>
            </Fragment>
          );
        })}
        <tr>
          <BraceTd>{']'}</BraceTd>
          <EmptyTd />
          <EmptyTd />
          <EmptyTd />
          <EmptyTd />
        </tr>
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  font-family: 'Segoe UI', sans-serif;
  width: 100%;
`;

const StyledTd = styled.td`
  color: ${({ theme }) => theme.primary};
  font-size: 0.8em;
  font-weight: bold;
`;

const BraceTd = styled.td`
  font-weight: bolder;
  width: 6%;
`;

const EmptyTd = styled.td``;

export default SkillsStyledTable;
