import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { useTransition, animated } from 'react-spring';

import ScrollToTop from '../UI/scrollTop';
import classes from '../CSS/header.module.scss';



const StyledLink = styled(Link)`
  
cursor: pointer;
display: flex;
align-items: center;
`;

const LogoNavBar = ({ notOnePageSection, setMenuOpened }) => {
    // State to show or hide scroll to top component, gets trigged based on the scroll link component
    const [showScrollTop, setShowScrollTop] = useState(false);
    // Animation
    const ScrollTopTransition = useTransition(showScrollTop, null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });

    return notOnePageSection ? (
        <StyledLink to="/#about-me">HI</StyledLink>
      ) : (
        <>
          <StyledLink
            to="header"
            smooth={true}
            spy={true}
            // When header section is active, hide scroll to top When inactive, show scroll to top
            onSetActive={() => setShowScrollTop(false)}
            onSetInactive={() => setShowScrollTop(true)}
            onClick={() => setMenuOpened(false)}
          >
         <div className={classes.logo}><img className={classes.logo} src= 'LOGO.PNG' alt='logo'/></div>
           </StyledLink>
          {ScrollTopTransition.map(
            ({ item, key, props }) =>  item && <ScrollToTop style={props} key={key} />
          )}
        </>
      );
    };
    
    export default LogoNavBar;