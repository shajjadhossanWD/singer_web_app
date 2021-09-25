import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Singers.css';


const Singers = () => {

const [singers, setSingers] = useState([]);
const [cart, setCart] = useState([]);

useEffect(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        setSingers(data)
    })
},[])

const addToCart = data =>{
    const getData = [...cart, data];
    setCart(getData);
}

    return (
        <div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-7 singers row row-cols-1 row-cols-md-3 g-3">
                   {
                       singers.map(singer => <Data 
                       key = {singer.id}
                       singer = {singer}  
                       addToCart = {addToCart} 
                       />)
                   }
                </div>
                <div className="col-lg-3 cart">
                     <Cart cart = {cart}/>
                </div>
            </div>
        </div>
    );
};

export default Singers;