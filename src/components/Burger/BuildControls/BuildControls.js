import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
]
const BuildControls = () => (
    <div className={classes.BuildControls}>
        {controls.map(el => {
            return <BuildControl key={el.label} label={el.label} less="Less" more="More"/>
        })}
    </div>
)

export default BuildControls;