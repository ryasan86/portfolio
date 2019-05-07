import styled from 'styled-components';

import Me from './../../assets/images/me.jpg';
import device from '../../styles/device';

const AboutContainer = styled.section`
  padding: 0 5%;

  .inner {
    position: relative;
    max-width: ${props => props.theme.maxContentWidth};
    display: grid;
    grid-template-columns: 3fr 4fr;
    @media ${device.tablet} {
      grid-template-columns: none;
    }
  }

  .about-img {
    position: relative;
    background: url(${Me}) center center/cover no-repeat;
    height: 100%;
    margin-right: 150px;
    @media ${device.tablet} {
      margin: 0;
      display: block;
      height: 300px;
    }
  }

  .about-desc {
    padding: 50px;
    position: relative;
    h1 {
      position: absolute;
      top: -220px;
      left: -50px;
      right: 0;
      bottom: 0;
      text-transform: uppercase;
      font-size: 18rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.08);
      @media ${device.tablet} {
        display: none;
      }
    }
    .about-text {
      position: relative;
      h2 {
        font-size: 3rem;
        margin: 0 0 50px 0;
        font-weight: lighter;
        letter-spacing: 1px;
      }
      h5 {
        margin: 0;
        font-size: 2rem;
      }
      p {
        margin: 10px 0 15px 0;
        font-weight: lighter;
      }
    }
  }

  .about-social {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    li {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      padding: 15px;
      margin-left: 10px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      &:first-child {
        margin: 0;
      }
      &:hover {
        svg {
          fill: ${props => props.theme.white};
        }
      }
    }
  }
`;

export default AboutContainer;
