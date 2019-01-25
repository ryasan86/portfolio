import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
// components
import SkillsTable from './../components/SkillsTable';
import {
  SectionWrap,
  ScrollFooter,
  ScrollFooterButton,
  SectionContent
} from './../components/common';

class About extends Component {
  render = () => {
    return (
      <AboutWrap>
        <AboutContent>
          <SummaryContainer>
            <h3>Summary</h3>
            <p>{data.summary}</p>
          </SummaryContainer>

          <SkillsContainer>
            <SkillsTable />
          </SkillsContainer>
        </AboutContent>
        <ScrollFooter>
          <ScrollFooterButton to="Projects" />
        </ScrollFooter>
      </AboutWrap>
    );
  };
}

const SummaryContainer = styled.div`
  width: 60%;
  padding: 10%;
`;

const SkillsContainer = styled.div`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  padding: 2% 7%;
`;

const AboutContent = styled(SectionContent)`
  display: flex;
  width: 100%;
  top: 50px;
`;

const AboutWrap = styled(SectionWrap)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  margin-bottom: 30%;
`;

export default About;
