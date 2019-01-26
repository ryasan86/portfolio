import React, { Component } from 'react';
import styled from 'styled-components';
import data from './../data.json';
import { DOWN_ARROW } from './../images';
// components
import SkillsTable from './../components/SkillsTable';
import {
  Section,
  ScrollFooter,
  ScrollBtn,
  SectionContent
} from './../components/common';

class About extends Component {
  render = () => {
    return (
      <AboutSection id={this.props.id}>
        <AboutContent>
          <SummaryContainer data-aos="fade-up">
            <h3>Summary</h3>
            <p>{data.summary}</p>
          </SummaryContainer>
          <SkillsContainer data-aos="fade-down">
            <SkillsTable />
          </SkillsContainer>
        </AboutContent>
        <ScrollFooter>
          <ScrollBtn to="Projects" label="Projects" icon={DOWN_ARROW} />
        </ScrollFooter>
      </AboutSection>
    );
  };
}

const AboutSection = styled(Section)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  @media only screen and (min-width: 768px) {
    margin-bottom: 20%;
  }
`;

const AboutContent = styled(SectionContent)`
  display: flex;
  width: 100%;
`;

const SummaryContainer = styled.div`
  width: 60%;
  padding: 10%;
  overflow-y: scroll;
`;

const SkillsContainer = styled.div`
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  padding: 2% 7%;
  overflow-y: scroll;
`;

export default About;
