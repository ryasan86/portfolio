import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { summary } from './../data.json';

import { P } from './../components/text';

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
  }
`;

export default Summary;
