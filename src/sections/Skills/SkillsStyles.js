import styled from 'styled-components';

import device from '../../styles/device';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    width: 100%;
    max-width: ${props => props.theme.maxContentWidth};
    @media ${device.tablet} {
      flex-direction: column;
    }
  }
`;

export default SkillsContainer;
