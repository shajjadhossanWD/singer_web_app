import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Singers.css';

// this is singer component here loaded all information for website 
const Singers = () => {
// this useState used for showen singers data..................... 
const [singers, setSingers] = useState([]);

// this useState used for set singer information by cart....................... 
const [cart, setCart] = useState([]);

// for json data loaded ...............................
useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => {
        // console.log(data) 
        setSingers(data)
    })
},[])

// click handaler for add data to the cart .......................
const addToCart = data =>{
    const check = cart.find(singer => singer.id === data.id);
    if(!check){
        const getData = [...cart, data];
        setCart(getData);
    }
   
}

    return (
        <div>
            <div className="row mainDiv">
                <div className="col-lg-1"></div>
                 {/* singers all information showen section  */}
                <div className="col-lg-8 singers row row-cols-1 row-cols-md-3 g-4">
                   {
                       singers.map(singer => <Data 
                       key = {singer.id}
                       singer = {singer}  
                       addToCart = {addToCart}  
                       />)
                   }
                </div>
                 {/* cart data section  */}
                <div className="col-lg-3 cart">
                     <Cart cart = {cart}/>
                </div>
            </div>
        </div>
    );
};

export default Singers;