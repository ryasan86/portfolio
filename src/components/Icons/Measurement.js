import React from 'react';
import { StyledSVG } from './IconStyles';

const Measurement = ({
  css = {},
  fill = '#fff',
  width = '100%',
  viewBox = '0 0 64 64',
  visibility = 'visibile',
  className,
  iconClick = () => {}
}) => (
  <StyledSVG
    width={width}
    height={width}
    viewBox={viewBox}
    css={css}
    fill={fill}
    onClick={iconClick}
    visibility={visibility}
    className={className}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="_3-Ruler" data-name="3-Ruler">
      <path d="M2.59,60H60V2.59ZM58,58H7.41L15,50.38l3.53,3.54L20,52.51,16.44,49l2.83-2.83,2.12,2.12,1.42-1.41-2.12-2.12,2.82-2.83,3.54,3.54L28.46,44l-3.53-3.53,2.83-2.83,2.12,2.12,1.41-1.42-2.12-2.12L32,33.41,35.54,37,37,35.54,33.41,32l2.83-2.83,2.12,2.12,1.42-1.41-2.12-2.12,2.88-2.89,3.54,3.54L45.49,27,42,23.46l2.77-2.77,2.12,2.12,1.41-1.42-2.12-2.12,2.77-2.77L52.45,20l1.41-1.42-3.53-3.53L58,7.41Z" />
      <path d="M50,50V26.59L26.59,50Zm-2-2H31.41L48,31.41Z" />
    </g>
  </StyledSVG>
);

export default Measurement;
