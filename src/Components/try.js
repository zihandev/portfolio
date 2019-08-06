import React from 'react';
import classes from '../CSS/try.module.scss';
import {useTheme} from '../Theme/themeProvider';


const Try = () => {



    const themeState = useTheme();

    let check = themeState.dark ? true : false


    return (
        <div className={classes.wrapper}>
        <div className={classes.toggle}>
          <input onClick={()=>themeState.toggle()} className={classes.toggleInput} type="checkbox" checked={check} />
          <div onClick={()=>themeState.toggle()} className={classes.toggleBg}></div>
          <div onClick={()=>themeState.toggle()} className={classes.toggleSwitch}>
            <div className={classes.toggleSwitchFigure}></div>
            <div className={classes.toggleSwitchFigureAlt}></div>
          </div>  
        </div>
      </div>
    )
}

export default Try



// return (
//     <button >{themeState.dark ? 'Light Mode': 'Dark Mode'}</button>
// )
