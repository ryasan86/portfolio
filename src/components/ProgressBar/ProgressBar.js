import React, { useState, useEffect } from 'react';

import ProgressBarContainer, { ProgressBar } from './ProgressBarStyles';

const Progress = () => {
  const [scrollPct, setPct] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', adjustProgess);
  });

  const adjustProgess = () => {
    const { body, documentElement } = document;
    const winScroll = body.scrollTop || documentElement.scrollTop;
    const height = documentElement.scrollHeight - documentElement.clientHeight;
    const amtScrolled = (winScroll / height) * 100;

    setPct(amtScrolled);
  };

  return (
    <ProgressBarContainer>
      <ProgressBar scrollPct={scrollPct} />
    </ProgressBarContainer>
  );
};

export default Progress;
