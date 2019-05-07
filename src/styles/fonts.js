import { css } from 'styled-components';

import PoppinsLight from '../assets/fonts/poppins-light-webfont.woff';
import PoppinsLight2 from '../assets/fonts/poppins-light-webfont.woff2';
import PoppinsRegular from '../assets/fonts/poppins-regular-webfont.woff';
import PoppinsRegular2 from '../assets/fonts/poppins-regular-webfont.woff2';
import PoppinsBold from '../assets/fonts/poppins-bold-webfont.woff';
import PoppinsBold2 from '../assets/fonts/poppins-bold-webfont.woff2';

export default {
  poppinsLight: css`
    font-family: 'Poppins';
    src: url(${PoppinsLight2}) format('woff2'), url(${PoppinsLight}) format('woff');
    font-weight: 100;
    font-style: normal;
  `,
  poppinsRegular: css`
    font-family: 'Poppins';
    src: url(${PoppinsRegular2}) format('woff2'), url(${PoppinsRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  `,
  poppinsBold: css`
    font-family: 'Poppins';
    src: url(${PoppinsBold2}) format('woff2'), url(${PoppinsBold}) format('woff');
    font-weight: 900;
    font-style: normal;
  `,
};
