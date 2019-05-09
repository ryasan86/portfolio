import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { size } from '../../styles/device';

const ParallaxItem = ({
  children = {},
  className = '',
  styleOuter = {},
  styleInner = {},
  y = [80, -80]
}) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= size.tablet) setDisabled(true);
    window.addEventListener('resize', () => {
      window.innerWidth <= size.tablet ? setDisabled(true) : setDisabled(false);
    });
  });

  return (
    <Parallax
      className={className}
      y={y}
      styleOuter={styleOuter}
      styleInner={styleInner}
      disabled={disabled}>
      {children}
    </Parallax>
  );
};

export default ParallaxItem;
