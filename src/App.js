import React, {Component} from 'react';
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
import Conditional from './Conditional'
import styles from './CSS/button.module.scss'

const Wrapping = styled('div')`
 background : ${props=> props.theme.background};
width : 100%;
height : 100%;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";

li{
  color : ${props=>props.theme.body};
}
footer{
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


class App extends Component {
 state = {
   installButton : ''
 }


  installPrompt = null;
  componentDidMount(){
      console.log("Listening for Install prompt");
      window.addEventListener('beforeinstallprompt',e=>{
        // For older browsers
        e.preventDefault();
        console.log("Install Prompt fired");
        this.installPrompt = e;
        // See if the app is already installed, in that case, do nothing
        if((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true){
          return false;
        }
        // Set the state variable to make button visible
        this.setState({
          installButton:true
        })
      })
    }

    installApp=async ()=>{
      if(!this.installPrompt) return false;
      this.installPrompt.prompt();
      let outcome = await this.installPrompt.userChoice;
      if(outcome.outcome=='accepted'){
        console.log("App Installed")
      }
      else{
        console.log("App not installed");
      }
      // Remove the event reference
      this.installPrompt=null;
      // Hide the button
      this.setState({
        installButton:false
      })
    }
    render(){
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
        <Conditional condition={this.state.installButton}
             style={styles.btn}
             onClick={this.installApp}>
            Install As Application
          </Conditional>
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
}

export default App;
