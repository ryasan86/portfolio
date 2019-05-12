import React from 'react';

import SkillsItemContainer from './SkillsItemStyles';

const SkillsItem = ({ name, percent, idx, animStarted }) => (
  <SkillsItemContainer percent={percent} idx={idx + 1}>
    <div className="text">
      <h3>{name}</h3>
      <small className={animStarted ? 'percent-text started' : 'percent-text'}>
        {percent}%
      </small>
    </div>
    <div className="bar-container">
      <div className={animStarted ? 'progress-bar started' : 'progress-bar'} />
    </div>
  </SkillsItemContainer>
);

export default SkillsItem;
