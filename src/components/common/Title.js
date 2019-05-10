import styled from 'styled-components';

import device from '../../styles/device';

const TitleContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.white};
  position: relative;
  margin-bottom: 4em;
  max-width: 800px;

  p {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${props => props.theme.textColor};
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  
  h2 {
    font-size: 4rem;
    color: ${props => props.theme.white};
    font-weight: 700;
    display: inline-block;
    position: relative;
    margin: 0;
    @media ${device.tablet} {
      font-size: 4rem;
    }
  }
`;

export default TitleContainer;
