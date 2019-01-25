import React, { Component } from 'react';
import styled from 'styled-components';
// import Waypoint from 'react-waypoint';
import { BG_1, BG_2, BG_3, SECTIONS } from './constants';
import { amountScrolled } from './utils';
// components
import Header from './components/Header';

class App extends Component {
  state = { bg: '' };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenForBGChange);
  };

  listenForBGChange = () => {
    const scrollPct = amountScrolled();
    const { bg } = this.state;
    if (scrollPct <= 31 && bg !== BG_1) {
      this.setState({ bg: BG_1 });
    } else if (scrollPct > 31 && scrollPct <= 65 && bg !== BG_2) {
      this.setState({ bg: BG_2 });
    } else if (scrollPct > 65 && scrollPct <= 100 && bg !== BG_3) {
      this.setState({ bg: BG_3 });
    }
  };

  render = () => {
    return (
      <AppWrap>
        <Header />
        <Parallax bg={this.state.bg} />
        {SECTIONS.map(({ section, Component }, i) => (
          <Component id={section} key={i} />
        ))}
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
  background: url(${({ bg }) => bg}) center center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  filter: blur(2px);
  -webkit-filter: blur(2px);
`;

export default App;
