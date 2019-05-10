import React from 'react';

import SkillsContainer from './SkillsStyles';
import TitleContainer from './../../components/common/Title';
import SkillsList from './../../components/SkillsList/SkillsList';
import MyServices from './../../components/MyServices/MyServices';

const Skills = () => (
  <SkillsContainer id="skills">
    <TitleContainer data-aos="fade-up">
      <p>Skills</p>
      <h2>What I do</h2>
    </TitleContainer>
    <div className="content">
      <MyServices />
      <SkillsList />
    </div>
  </SkillsContainer>
);

export default Skills;
