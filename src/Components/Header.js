import React from 'react'
import classes from '../CSS/header.module.scss';
import buttons from '../CSS/button.module.scss';
import WordsFading from './wordsFading';
import {Link} from 'react-scroll';


const Header = () => {
    return (
        <header id='header' className={classes.header} >
              <div class="header__logo-box">
                {/* <img src="img/logo-white.png" alt="Logo" class="header__logo"/> */}
            </div>

            <div className={classes.header__textBox}>
                <h1 className={classes.headingPrimary}>
                    <span className={classes.headingPrimaryMain}>Hello✌️, </span>
                    <span className={classes.headingPrimarySub}>I'm  <span className={classes.coloring}>Zihan</span></span>
                    <span className={classes.headingPrimarySubsub}>A <span className={classes.fading}>&nbsp; <WordsFading/> </span>&nbsp;  Full-stack developer</span>
                </h1>

                <Link to='about-me' offset={-60} delay={200} spy={true} smooth={true} className={`${buttons.btn} ${buttons.btnWhite} ${buttons.btnAnimated}`}>About Me</Link>
            </div>
        </header>
  
    )
}

export default Header;
