import React from 'react';
import Cartdata from '../Cartdata/Cartdata';
import './Cart.css';

// cart component for showen selected singer to the cart 
const Cart = (props) => {
    const {cart} = props;
    let totalCost = "";
    for(const details of cart){
        totalCost = parseFloat(totalCost + details.salary);
     }
    return (
        <div className = "addTotal">
            <h4><i className="fas fa-users"></i> Singers Added : <span>{props.cart.length}</span> </h4>
            <h5>Total Cost: <span>৳ {totalCost}</span> </h5>

            {/* another componet for showen single selected singers data  */}
            <div>
              {
                cart.map(singer => 
                <Cartdata key = {singer.id} 
                singer={singer}/>
                )
              }
            </div>
               
            
        </div>
    );
};

export default Cart;