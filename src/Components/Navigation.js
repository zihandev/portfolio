import React,{Component} from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import classes from '../CSS/navigation.module.scss'

import Try from './try';

class Navigation extends Component {
    state={
        showMenu : true
    }

    clicked = () => {
        this.setState({showMenu:!this.state.showMenu})
    }

    render(){



        const Wrapping = styled('div')`
 background : ${props=> props.theme.background};
 body : ${props=>props.theme.background};
color : ${props=>props.theme.body};
z-index : 1000
div{
    color : ${props=>props.theme.body};
    background : ${props=> props.theme.background};
  }

`

        const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 800;
  text-transform: uppercase;
  color: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-bottom : 20rem;
  transition: color 0.2s ease-out;
  &:hover {
    color: black;
  }
 
`;

        let yes;

        if(this.state.showMenu){
         yes= (<input type='checkbox' className={classes.navigation__checkbox}  id='navi-toggle'/>)
        } 
        if(!this.state.showMenu){
            yes=  (<input type='checkbox' className={classes.navigation__checkbox} checked={false} id='navi-toggle'/>)
            this.setState({showMenu:!this.state.showMenu})
        } 

    return (
        <Wrapping>   <div className={classes.navigation}>
           {yes}

        
            <label for="navi-toggle" className={classes.navigation__button}>
                <span className={classes.navigation__icon}>&nbsp;</span>
            </label>


            {/* background color (green) that scales on checked is under navigation__button color */}
            <section className={classes.navigation__background}>&nbsp;</section>

              <nav className={classes.navigation__nav}>
            <ul className={classes.navigation__list}>
                 <li className={classes.navigation__item} ><StyledLink to='about-me' offset={-60} onClick={this.clicked} delay={200} spy={true} smooth={true}  >About Me</StyledLink></li>
                <li className={classes.navigation__item} ><StyledLink to='portfolio' offset={-60} onClick={this.clicked} delay={200} spy={true} smooth={true}  >Projects</StyledLink></li>
                <li className={classes.navigation__item} ><StyledLink to='contact' offset={-60} onClick={this.clicked} delay={200} spy={true} smooth={true}  >Contact</StyledLink></li>
                <div className={classes.try}><Try/></div> 
             </ul>
             {/* <ThemeButton/> */}
            
</nav>

        </div> </Wrapping>
    )
}}

export default Navigation
