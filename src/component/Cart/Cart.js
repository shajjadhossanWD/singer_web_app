import React from 'react';
import Cartdata from '../Cartdata/Cartdata';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let totalCost = "";
    for(const details of cart){
        totalCost = parseFloat(totalCost + details.salary);
     }
    return (
        <div className = "addTotal">
            <h4>Singers Added : <span>{props.cart.length}</span> </h4>
            <h5>Total Cost: <span>৳ {totalCost}</span> </h5>
            <ul>
              {
                cart.map(singer => 
                <Cartdata key = {singer.id} 
                singer={singer}/>
                )
              }
            </ul>
               
            
        </div>
    );
};

export default Cart;