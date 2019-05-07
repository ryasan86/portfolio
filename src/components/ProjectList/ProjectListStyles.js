import styled from 'styled-components';

const ProjectListContainer = styled.ul`
  padding: 0;
  width: 100%;
  max-width: ${props => props.theme.maxContentWidth};
  list-style-type: none;
`;

export default ProjectListContainer;
