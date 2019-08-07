import styled from 'styled-components';
import { animated } from 'react-spring';

export const StyledHeader = styled(animated.header)`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  background: white;
 
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`;


export const Contained = styled.div`
  max-width: 10rem;
  z-index: 2;
  padding: 0 1rem;
//   margin: 0 auto;
  width: 100%;
  
 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: 3.5rem;
  
 
`;

