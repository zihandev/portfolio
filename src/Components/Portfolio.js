import React from 'react'
import classes from '../CSS/portfolio.module.scss'

import {FaGithub} from 'react-icons/fa'

import LazyLoad from 'react-lazyload';


const Portfolio = () => {
    return (
        <div id='portfolio' className={classes.portfolio}>
              <h3 className={classes.heading}>Projects</h3>
              <p className={classes.talk}>Check <strong>what</strong> I've been doing <strong> lately </strong></p>
              
              <div className={classes.pros}>
                  <h5 className={classes.name}>Trillo</h5>
                  <LazyLoad offset={100}><img className={classes.img} src='/Images/port4.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A tour booking app for a fictional company. Create profiles, book tours, review and rate your tours. Advanced API filtering, aggregation, global error handling, user authorization, geospatial querying and many more !</p>
                  <h5 className={classes.tech}>React - Styled Components - Flexbox - Express - NodeJS - REST API - Mongoose - MongoDB - Multer </h5>
                  <a href='https://github.com/zihandev/tours_app' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>
  
              <div className={classes.pros}>
                  <h5 className={classes.name}>Feedback App</h5>
                  <LazyLoad offset={100} ><img className={classes.img} src='/Images/port2.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A website that allows users to keep track of their customers. Enterprises can send out mails to their customers to receive feedback about their services. Avail all features at affordable pricing.</p>
              <h5 className={classes.tech}>React - Redux Form - SASS - NodeJS - MongoDb - OAuth - SendGrid - Stripe - Heroku</h5>
              <a href='https://github.com/zihandev/feedback_app' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Realtestate</h5>
                  <LazyLoad offset={100}><img className={classes.img} src='/Images/port5.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>This property renting/buying website allows users to explore company's featured houses, villas and mansions available at affordable prices. The website comes in with advanced search functionality, whereby users could explore their desired type of properties, wishlist their favourite houses and contact the realtor. </p>
                  <h5 className={classes.tech}>React - Context API - React Selectv2 - CSS Grids - Netlify</h5>
                  <a  href='https://github.com/zihandev/real_estate' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Arab Watch Guide</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>An eCommerce Watch site with Blogs, Videos and Updated news on latest watch trends ! Become a member to get exclusive discounts on latest arrivals and stay updated with latest news in the lucrative watch industry.</p>
                  <h5 className={classes.tech}>PHP - MySQL - Wordpress - AWS</h5>
                  <a  className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Ship-Rocket</h5>
                  <LazyLoad offset={100}><img className={classes.img} src='/Images/port6.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A single stop eCommerce website for all your mobile needs built with React, Redux and CSS Modules. Firebase is used on the back-end for database and user management.  .</p>
                  <h5 className={classes.tech}>React - Redux - Formik - CSS Modules - Firebase & Firestore </h5>
                  <a href='https://github.com/zihandev/mobile-eCommerce' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Portfolio</h5>
                  <LazyLoad offset={200}><img className={classes.img} src='/Images/personal.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>I wanted something fast and with good SEO for my portfolio, so a static website generator like Gatsby seemed like the best fit. It reads data from markdown files, making it easy to keep adding Portfolio items as I keep developing stuff. It also has a cool dark mode switch since I couldn't decide between a dark or light design.</p>
                  <h5 className={classes.tech}>React - React Hooks - Styled Components - Gatsby - Netlify </h5>
                  <a href='https://zihandev.netlify.com/' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Budgety</h5>
                  <LazyLoad offset={100}><img className={classes.img} src='/Images/port3.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A simple app to manage your monthly budget. You can insert your income and your expenses, and it will calculate budget left for the month,while also showing the percentage that each expense took from your budget.</p>
                  <h5 className={classes.tech}>Vanilla JS - SASS </h5>
                  <a  href='https://github.com/zihandev/budget_app' target="_blank" className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>
            
              
        </div>
    )
}

export default Portfolio
