import React, { Component } from 'react';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Icons from './../images';
// components
import SkillsTable from './../components/SkillsTable';
import Summary from './../components/Summary';
import {
  Section,
  ScrollFooter,
  ScrollBtn,
  SectionContent
} from './../components/common';

class About extends Component {
  state = { enteredAbout: false };

  handleEnter = () => {
    this.setState({ enteredAbout: true });
  };

  handleRef = aboutSec => {
    this.props.getOffsetTop(aboutSec);
  };

  render = () => {
    return (
      <Waypoint onEnter={this.handleEnter}>
        <div>
          <AboutSection
            id={this.props.id}
            data-offset-id={`${this.props.id}OffsetTop`}
            ref={this.handleRef}>
            <AboutContent>
              <SummaryContainer data-aos="fade-up">
                <Summary enteredAbout={this.state.enteredAbout} />
              </SummaryContainer>
              <SkillsContainer data-aos="fade-down">
                <SkillsTable />
              </SkillsContainer>
            </AboutContent>
            <ScrollFooter>
              <ScrollBtn to="Projects" label="Projects" icon={Icons.downArrow} />
            </ScrollFooter>
          </AboutSection>
        </div>
      </Waypoint>
    );
  };
}

const AboutSection = styled(Section)`
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.mainFontColor};
  min-height: 100vh;
  height: auto;
`;

const AboutContent = styled(SectionContent)`
  height: 100%;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 420px) {
    position: relative;
    flex-direction: column;
  }
`;

const SummaryContainer = styled.div`
  width: 60%;
  height: calc(100% - ${({ theme }) => theme.headerHeight});
  padding: 10%;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

const SkillsContainer = styled.div`
  width: 40%;
  height: calc(100% - ${({ theme }) => theme.headerHeight});
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  padding: 2% 13%;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

export default About;
