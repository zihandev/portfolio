import React from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import ScrollDown from './UI/scrollDown';


import { Contained, Wrapper, StyledHeader } from './UI/styled';
import LogoNavBar from './Components/logoNavBar';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

import styled from '@emotion/styled';
import {useTheme} from './Theme/themeProvider'


const Wrapping = styled('div')`
 background : ${props=> props.theme.background};
width : 100%;
height : 100%;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";

li{
  color : ${props=>props.theme.body};
}
section{
  color : ${props=>props.theme.body};
  background : ${props=> props.theme.background};
  transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
}

color : ${props=>props.theme.body};
transition: all .8s cubic-bezier(.17,.67,.83,.67);

`


function App() {



  React.useEffect(() => {
    console.log('App component loaded')
  }, []);


  return (
   <Wrapping>
   <StyledHeader >
      <Contained >
        <Wrapper>
      <LogoNavBar
            notOnePageSection={false}
            setMenuOpened={(bool)=>console.log(bool)}
          /></Wrapper>
        </Contained></StyledHeader>
   
      <Navigation/>
      <Header/>
      <ScrollDown/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
     
      {/* <h1>Hey There</h1> */}
      </Wrapping>
  );
}

export default App;
