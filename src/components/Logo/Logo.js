import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img className={classes.Logo} src={burgerLogo} alt='burger logo'/>
    </div>
)

export default Logo;