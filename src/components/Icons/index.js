import React from 'react';

import Github from './Github';
import Codepen from './Codepen';
import Linkedin from './Linkedin';
import UpArrow from './UpArrow';

const Icon = props => {
  switch (props.name) {
    case 'github':
      return <Github {...props} />;
    case 'codepen':
      return <Codepen {...props} />;
    case 'linkedin':
      return <Linkedin {...props} />;
    case 'upArrow':
      return <UpArrow {...props} />;
    default:
      return;
  }
};

export default Icon;