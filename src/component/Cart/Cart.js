import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let singerName=" ";
    for(const details of cart){
        singerName = details.name;
    }
    return (
        <div>
            <h4>Employees Added : {cart.length}</h4>
            <div className="row">
                <div className="col-lg-3">
                    <img src="" alt="" />
                </div>
                <div className="col-lg-9">
                    <p>{singerName}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;