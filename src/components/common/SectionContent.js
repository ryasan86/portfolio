import styled from 'styled-components';

const SectionContent = styled.div`
  bottom: 0;
  position: absolute;
  height: calc(100% - ${({ theme }) => theme.headerHeight});
  top: ${({ theme }) => theme.headerHeight};
`;

export { SectionContent };
