import React, { Component } from 'react';
import styled from 'styled-components';
// import Waypoint from 'react-waypoint';
import { BG_1, BG_2 } from './constants';
import { amountScrolled } from './utils';
// components
import Header from './components/Header';
import Intro from './sections/Intro';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const SECTIONS = [
  { id: 'one', Component: Intro, scrollPct: 0, bg: BG_1 },
  { id: 'two', Component: About, scrollPct: 32, bg: BG_2 },
  { id: 'three', Component: Projects, scrollPct: 65, bg: BG_1 },
  { id: 'four', Component: Contact, scrollPct: 90, bg: BG_2 }
];

class App extends Component {
  state = { bg: '' };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenForBGChange);
  };

  listenForBGChange = () => {
    console.log(amountScrolled());
    const x = SECTIONS.find(({ scrollPct }) => amountScrolled() === scrollPct);
    x && this.setState({ bg: x.bg });
  };

  render = () => {
    return (
      <AppWrap>
        <Header />
        <Parallax bg={this.state.bg} />
        {SECTIONS.map(({ id, scrollPct, bg, Component }, i) => {
          return (
            <Section key={i} id={id}>
              <Component blue={i % 2} />
            </Section>
          );
        })}
      </AppWrap>
    );
  };
}

const AppWrap = styled.div`
  height: 300vh;
`;

const Parallax = styled.div`
  z-index: -1;
  background-color: #05070a;
  background-image: url(${({ bg }) => bg});
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  /* filter: blur(2px);
  -webkit-filter: blur(2px); */
  /* filter: ${({ blur }) => (blur ? 'blur(2px)' : 'none')}; */
  /* -webkit-filter: ${({ blur }) => (blur ? 'blur(2px)' : 'none')}; */
`;

const Section = styled.section``;

export default App;
