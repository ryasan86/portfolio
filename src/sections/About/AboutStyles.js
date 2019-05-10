import styled, { css } from 'styled-components';

import { Me } from './../../assets/images';
import device from '../../styles/device';

const AboutContainer = styled.section`
  .inner {
    position: relative;
    max-width: ${props => props.theme.maxContentWidth};
    display: grid;
    grid-template-columns: 3fr 4fr;
    z-index: 1;
    @media ${device.tablet} {
      grid-template-columns: none;
    }
  }

  .about-img {
    position: relative;
    background: url(${Me}) center center/cover no-repeat;
    height: 100%;
    margin-right: 100px;
    @media ${device.tablet} {
      margin: 0;
      height: 400px;
    }
  }

  .about-desc {
    padding: 50px;
    position: relative;
    @media ${device.mobileL} {
      padding: 50px 0;
    }

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
      overflow: hidden;
      @media ${device.laptop} {
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
        @media ${device.tablet} {
          text-align: center;
        }
      }
      h5 {
        margin: 0;
        font-size: 2rem;
      }
      p {
        margin: 10px 0 15px 0;
        font-weight: lighter;
        button {
          font-size: inherit;
        }
      }
    }
  }

  .about-social {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 2rem 0;
    li {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      padding: 1.5rem;
      margin-left: 1rem;
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
      svg {
        fill: ${props => props.theme.primary};
      }
    }
  }
`;

const iconStyles = css`
  fill: ${props => props.theme.primary};
`;

const styleOuter = {
  height: '100%'
};

const styleInner = {
  height: '100%',
  overflow: 'hidden'
};

export { iconStyles, styleOuter, styleInner };
export default AboutContainer;
