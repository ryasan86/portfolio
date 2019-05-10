import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import SkillsListContainer from './SkillsListStyles';
import SkillsItem from './../SkillsItem/SkillsItem';
import { skills } from '../../constants';

const SkillsList = () => {
  const [animStarted, startProgressAnim] = useState(false);

  return (
    <Waypoint onEnter={() => startProgressAnim(true)}>
      <SkillsListContainer data-aos="fade-up">
        {skills.map((skill, idx) => {
          const [name, percent] = Object.entries(skill)[0];

          return (
            <SkillsItem
              key={name}
              idx={idx}
              name={name}
              percent={percent}
              animStarted={animStarted}
            />
          );
        })}
      </SkillsListContainer>
    </Waypoint>
  );
};

export default SkillsList;
