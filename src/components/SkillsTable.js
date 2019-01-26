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
                <Cell />
                <BraceTd>{'{'}</BraceTd>
                <Cell />
                <Cell />
                <Cell />
              </tr>
              <tr>
                <Cell />
                <Cell />
                <StyledTd>"name":"{name}",</StyledTd>
                <Cell />
                <Cell />
              </tr>
              <tr>
                <Cell />
                <Cell />
                <StyledTd>"value": {value}</StyledTd>
                <Cell />
                <Cell />
              </tr>
              <tr>
                <Cell />
                <BraceTd>{i < data.skills.length - 1 ? '},' : '}'}</BraceTd>
                <Cell />
                <Cell />
                <Cell />
              </tr>
            </Fragment>
          );
        })}
        <tr>
          <BraceTd>{']'}</BraceTd>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </tr>
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  font-family: 'Segoe UI', sans-serif;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const Cell = styled.td`
  font-size: 0.78em;
  @media only screen and (max-width: 420px) {
    font-size: 0.7em;
  }
`;

const StyledTd = styled(Cell)`
  color: ${({ theme }) => theme.primary};
  font-weight: bolder;
`;

const BraceTd = styled(Cell)`
  font-weight: bolder;
  width: 6%;
`;

export default SkillsStyledTable;
