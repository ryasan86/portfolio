import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { summary } from './../data.json';

import { P } from './../components/text';
import { flexCenter } from '../utils/flexCenter.js';

class Summary extends Component {
  render = () => (
    <SummaryWrap>
      <h2>About me</h2>
      {summary.map((text, i) => (
        <Fragment key={i}>
          <P>{text}</P>
          <br />
        </Fragment>
      ))}
    </SummaryWrap>
  );
}

const SummaryWrap = styled.div`
  height: 100%;
  min-height: 100vh;
  overflow: scroll;
  @media only screen and (max-width: 350px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  & > h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 3em;
    margin-bottom: 10%;
    @media (min-width: 350px) {
      margin-top: 20%;
    }
  }
`;

export default Summary;
