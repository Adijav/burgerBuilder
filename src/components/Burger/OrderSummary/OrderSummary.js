import React from 'react';
import Aux from '../../..//hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>
                        {igKey}
                    </span>
                    :{props.ingredients[igKey]}
                </li>
            ) 
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>buger with </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total Price: {props.totalPrice.toFixed(2)}</p>
            <p>Continue to checkout ?</p>
            <Button btnType='Danger' clicked={props.closeBackdropModalHandler}>Cancel</Button>
            <Button btnType='Success' clicked={props.checkoutModalHandler}>Checkout</Button>
        </Aux>
    )
}

export default OrderSummary;