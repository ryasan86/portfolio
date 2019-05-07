import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
  @font-face {
    ${fonts.poppinsLight};
  }
  @font-face {
    ${fonts.poppinsRegular};
  }
  @font-face {
    ${fonts.poppinsBold};
  }

  html {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-size: 10px;
  }

  /* * {
    outline: 1px solid red;
  } */

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    -ms-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    color: ${theme.primary};
    text-decoration: none;
    &:hover {
      color: ${theme.primary};
    }
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.5;
    color: ${theme.white};
    font-weight: 400;
  }

  .text-primary {
    color: ${theme.primary} !important;
  }

  section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  button, .button {
    cursor: pointer;
    &.button-link {
      color: ${theme.primary};
      background: none;
      border: none;
      outline: none;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
