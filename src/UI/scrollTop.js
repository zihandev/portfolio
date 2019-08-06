import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';

import classes from '../CSS/header.module.scss';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  margin-right: 1.5rem;
  bottom: 0;
  right: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--primary);
  box-shadow: 0px 8px 15px var(--shadow-color);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(1px);
  }
  
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color:white;
  font-size: 1rem;
`;

const ScrollToTop = ({style}) => {
   
  return (
    <animated.div className={classes.scroll} style={style} onClick={() => scroll.scrollToTop()}>
      <StyledIcon icon={faChevronUp} />
    </animated.div>
  );
};

export default ScrollToTop;