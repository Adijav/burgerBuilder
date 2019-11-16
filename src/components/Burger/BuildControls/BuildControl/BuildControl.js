import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>{props.less}</button>
        <button className={classes.More}>{props.more}</button>
    </div>
)

export default BuildControl;