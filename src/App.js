import React, { Component } from 'react';
import styled from 'styled-components';
// import Waypoint from 'react-waypoint';
import { BG_1, BG_2, SECTIONS } from './constants';
import { amountScrolled } from './utils';
// components
import Header from './components/Header';

class App extends Component {
  state = { bg: '', bgStyle: '' };

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenForBGChange);
  };

  // change parallax background depending on how far down user has scrolled
  listenForBGChange = () => {
    const scrollPct = amountScrolled();
    const { bg } = this.state;
    if (scrollPct <= 36 && bg !== BG_1) {
      this.setState({ bg: BG_1.imgUrl, bgStyle: BG_1.bgStyle });
    } else if (scrollPct > 36 && bg !== BG_2) {
      this.setState({ bg: BG_2.imgUrl, bgStyle: BG_2.bgStyle });
    } else if (scrollPct > 95) {
      this.setState({ bg: '', bgStyle: '' });
    }
  };

  render = () => {
    const { bg, bgStyle } = this.state;
    return (
      <AppWrap>
        <Header />
        <Parallax bg={bg} bgStyle={bgStyle} />
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
  ${({ bgStyle }) => bgStyle}
`;

export default App;
