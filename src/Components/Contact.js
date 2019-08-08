import React from 'react'
import classes from '../CSS/contact.module.scss';

import {FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub, FaTwitter} from 'react-icons/fa'


const Contact = () => {
    return (
        <div id='contact' className={classes.contact}>
            <h3 className={classes.heading}>Contact Me</h3>
            <p className={classes.talk}>If you want to <strong>talk</strong>, you can <strong>find me</strong> at :</p>
            <span className={classes.gmail}>mohammedzihan001@gmail.com</span>
            <footer className={classes.social}>
                <a className={classes.socialLinks} href='https://github.com/zihandev'  target="_blank"><FaGithub className={classes.icon} /></a>
                <a className={classes.socialLinks} href='https://www.linkedin.com/in/mohammed-zihan/'  target="_blank"><FaLinkedinIn className={classes.icon}/></a>
                <a className={classes.socialLinks} href='https://www.facebook.com/mohammed.zihan.3' target="_blank"><FaFacebookF className={classes.icon}/></a>
                <a className={classes.socialLinks} href='https://www.linkedin.com/in/mohammed-zihan/'  target="_blank"><FaTwitter className={classes.icon} /></a>
                <a className={classes.socialLinks} href='https://www.instagram.com/mohammedzihan/' target="_blank"><FaInstagram className={classes.icon} /></a>
            </footer>
            <h6 className={classes.copyright}>Copyright &copy; 2019, Mohammed Zihan</h6>
        </div>
    )
}

export default Contact
