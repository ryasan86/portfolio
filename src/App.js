import React, { Component } from 'react';
import styled from 'styled-components';
// components
import Header from './components/Header';
import Intro from './pages/Intro';

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />
        <Intro />
        <Parallax />
        <Intro />
        <Intro />
      </AppWrap>
    );
  }
}

const AppWrap = styled.div`
  height: 300vh;
`;

const Parallax = styled.div`
  z-index: -1;
  background-color: #05070a;
  background-image: url('https://i.postimg.cc/PxgRDwKD/codeBG.png');
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  filter: blur(2px);
  -webkit-filter: blur(2px);
`;

export default App;
