import React, { Component } from 'react';
import styled from 'styled-components';
// components
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />
      </AppWrap>
    );
  }
}

const AppWrap = styled.div``;

export default App;
