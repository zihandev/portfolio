import React, {useState} from 'react';
import classes from '../CSS/aboutme.module.scss';
import { useTransition } from 'react-spring';
import {FaFile, FaPaperPlane } from 'react-icons/fa'

const AboutMe = () => {

    const [showScrollTop, setShowScrollTop] = useState(true);
    // Animation
    const ScrollTopTransition = useTransition(showScrollTop, null, {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return (
        <div id='about-me' className={classes.aboutMe}>
        <h3 className={classes.heading}>About Me</h3>
        <p className={classes.par}>I'm Mohammed Zihan, a full-stack software developer.
Always been drawn to the overlap between design and development. As a developer, I enjoy using my obsessive attention to detail and my unequivocal love for making things.
</p>
      
             <p className={classes.par}>I’ve always sought out opportunities and challenges that are meaningful to me. 
             Passionate about developing and deploying applications while continuously learning new stuffs.</p>

<div >
<p className={classes.headings}>Experience :</p>
       <div className={classes.work}> <p className={classes.colours}>PROJECT COORDINATOR</p>
       <div className={classes.worksub}>   <p>Royex Technologies L.L.C </p><span className={classes.date}>(May 2018 - July 2019)</span> </div>   </div>
       {/* <div className={classes.work}> <p className={classes.colours}>SOFTWARE DEVELOPER</p>
       <div className={classes.worksub}>   <p>AL Zohara IT & Media Solution </p><span className={classes.date}>(Jan 2018 - June 2018)</span> </div>   </div> */}
       <div className={classes.work}> <p className={classes.colours}>IN PLANT TRAINEE</p>
       <div className={classes.worksub}>   <p>Bharath Heavy Electricals Limited</p><span className={classes.date}>(Jun 2017 - July 2017)</span> </div>   </div>
           </div>

           <p className={classes.headings}>Education :</p>
       <div className={classes.work}> <p className={classes.colours}>Electronics & Communication Engineering </p>
       <div className={classes.worksub}>   <p>MIT, Manipal</p><span className={classes.date}>(2014 - 2018)</span> </div>   </div>


            <h4 className={classes.heading2}>My current stack of &nbsp;<span className={classes.headings}>languages/technologies</span> &nbsp; is :</h4>
            <p className={classes.skills}>HTML5-CSS3-JAVASCRIPT-SASS-WEBPACK-REACTJS-REDUX-STYLED COMPONENTS-CSS MODULES-FIREBASE-BABEL-GRAPHQL-GATSBY-NODEJS-MONGODB-PHP-MYSQL</p>
           
        

            <div className={classes.cv}>
<a className={`${classes.btn} && ${classes.align}`}><FaPaperPlane/> &nbsp; Resume</a>
<a className={`${classes.btn} && ${classes.align}`} style={{backgroundColor:'white', color:'black', border:'1px solid black'}}><FaFile/> &nbsp;Curriculum</a>
</div>

       {/* {ScrollTopTransition.map(
        ({ item, key, props }) =>item && <ScrollToTop style={props} key={key} />
          )} */}
        </div>
    )
}

export default AboutMe;