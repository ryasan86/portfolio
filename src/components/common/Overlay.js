import React from 'react';
import styled from 'styled-components';

const StyledOverlay = ({ children, className }) => {
  return (
    <div data-aos="fade" className={className}>
      {children}
    </div>
  );
};

const Overlay = styled(StyledOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export { Overlay };
