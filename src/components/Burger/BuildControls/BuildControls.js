import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: {props.price.toFixed(2)}</p>
        {controls.map(el => {
            return (
                <BuildControl 
                    key={el.label} 
                    label={el.label} 
                    less="Less" 
                    more="More"
                    addIngredients={() => props.addIngredients(el.type)}
                    removeIngredients={() => props.removeIngredients(el.type)}
                    disable={props.disableButton[el.type]}
                />
            )
        })}
        <button 
            className={classes.OrderButton}
            disabled={!props.disabledOrderNow}
            onClick={props.order}
        >
            ORDER NOW
        </button>

    </div>
)

export default BuildControls;