import React, { Fragment } from 'react';
import styled from 'styled-components';

import { skills } from '../../constants';

const SkillsStyledTable = () => (
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
        {skills.map(({ name, value }, i) => {
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
                <StyledTd>"name": "{name}",</StyledTd>
                <Cell />
                <Cell />
              </tr>
              <tr>
                <Cell />
                <Cell />
                <StyledTd>
                  "value": <P>{value}</P>
                </StyledTd>
                <Cell />
                <Cell />
              </tr>
              <tr>
                <Cell />
                <BraceTd>{i < skills.length - 1 ? '},' : '}'}</BraceTd>
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

const SkillsWrap = styled.div`
  height: 100%;
`;

const StyledTable = styled.table`
  height: 100%;
  /* font-family: 'Segoe UI', sans-serif; */
`;

const Cell = styled.td`
  /* font-family: 'Ubuntu Mono', monospace; */
  font-weight: bold;
  @media only screen and (max-width: 420px) {
    font-size: 0.7em;
  }
`;

const StyledTd = styled(Cell)`
  color: ${({ theme }) => theme.primary};
  width: 400px;
  white-space: nowrap;
`;

const BraceTd = styled(Cell)`
  width: 30px;
`;

const P = styled.p`
  margin: 0;
  display: inline;
  font-weight: bolder;
  color: #e53935;
`;

export default SkillsStyledTable;
