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
                  <h5 className={classes.name}>Budgety</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port4.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A simple app to manage your monthly budget. You can insert your income, and also your expenses, and it will calculate how much budget you have left for the month, and also shows the percentage that each expense took from your budget.</p>
                  <h5 className={classes.tech}>Vanilla JS - SASS </h5>
                  <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>
  
              <div className={classes.pros}>
                  <h5 className={classes.name}>Feedback App</h5>
                  <LazyLoad offset={-100} ><img className={classes.img} src='/Images/port2.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A website that allows users to keep track of their customers. Enterprises can send out mails to their customers to receive feedback about their services. Avail all features at affordable pricing.</p>
              <h5 className={classes.tech}>React - Formik - Node - MongoDb</h5>
              <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Budgety</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port5.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A simple app to manage your monthly budget. You can insert your income, and also your expenses, and it will calculate how much budget you have left for the month, and also shows the percentage that each expense took from your budget.</p>
                  <h5 className={classes.tech}>Vanilla JS - SASS </h5>
                  <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Arab Watch Guide</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>An eCommerce Watch site with Blogs, Videos and Updated news on latest watch trends ! Become a member to get exclusive discounts on latest arrivals and stay updated with latest news in watch industry.</p>
                  <h5 className={classes.tech}>PHP - MySQL - Wordpress - AWS</h5>
                  <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Budgety</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port6.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A simple app to manage your monthly budget. You can insert your income, and also your expenses, and it will calculate how much budget you have left for the month, and also shows the percentage that each expense took from your budget.</p>
                  <h5 className={classes.tech}>Vanilla JS - SASS </h5>
                  <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>

              <div className={classes.pros}>
                  <h5 className={classes.name}>Budgety</h5>
                  <LazyLoad offset={-100}><img className={classes.img} src='/Images/port3.PNG' alt='image' /> </LazyLoad>
                  <p className={classes.text}>A simple app to manage your monthly budget. You can insert your income, and also your expenses, and it will calculate how much budget you have left for the month, and also shows the percentage that each expense took from your budget.</p>
                  <h5 className={classes.tech}>Vanilla JS - SASS </h5>
                  <a className={classes.btn}><FaGithub/> &nbsp;Source</a>
              </div>
            
              
        </div>
    )
}

export default Portfolio
