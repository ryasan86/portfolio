import React, { Fragment } from 'react';
import data from './../data.json';
import styled from 'styled-components';

const SkillsStyledTable = () => {
  return (
    <SkillsWrap>
      <StyledTable>
        <tbody>
          <tr>
            <BraceTd>{'['}</BraceTd>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
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
    </SkillsWrap>
  );
};

const SkillsWrap = styled.div`
  height: 100%;
  overflow: scroll;
`;

const StyledTable = styled.table`
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
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
