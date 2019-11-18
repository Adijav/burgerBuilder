import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} disabled={props.disable} onClick={props.removeIngredients}>{props.less}</button>
        <button className={classes.More}  onClick={props.addIngredients}>{props.more}</button>
    </div>
)

export default BuildControl;