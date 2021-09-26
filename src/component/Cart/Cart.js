import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let totalCost = "";
    for(const details of cart){
        totalCost = parseFloat(totalCost + details.salary);
     }
    return (
        <div>
            <h4>Singers Added : {props.cart.length}</h4>
            <h4>Total Cost: {totalCost}</h4>
            <ul>
              {
                cart.map(singer => 
                <li key= {singer.id}>{singer.name}</li>)
              }
            </ul>
               
            
        </div>
    );
};

export default Cart;