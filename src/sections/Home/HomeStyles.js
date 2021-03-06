import styled from 'styled-components';
import device from '../../styles/device';

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;

  .inner {
    text-align: center;
    color: ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    p {
      font-size: 2rem;
      line-height: 1.5;
      font-weight: 400;
      color: ${props => props.theme.textColor};
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    .typist-container {
      min-height: 20rem;
      h1 {
        text-transform: uppercase;
        display: inline-block;
        font-size: 5.5rem;
        color: ${props => props.theme.white};
        font-weight: 700;
        letter-spacing: 1rem;
        position: relative;
        margin: 0;
        @media ${device.tablet} {
          font-size: 4rem;
        }
      }
    }

    .button {
      background: transparent;
      color: ${props => props.theme.white};
      border: 2px solid ${props => props.theme.white};
      outline: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      padding: 1.5rem 4rem;
      letter-spacing: ${props => props.theme.letterSpacing};
      transition: all 0.5s ease-in-out;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      &:hover {
        background: ${props => props.theme.white};
        color: ${props => props.theme.black};
      }
    }
  }
`;

export default HomeContainer;
