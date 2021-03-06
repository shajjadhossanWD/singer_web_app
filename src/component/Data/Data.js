import React from 'react';
import Rating from 'react-rating';
import './Data.css';

// Data component for showen all data 
const Data = (props) => {
    const {img, name, net_worth, country, profession, salary,star} = props.singer
    return (
        <div>
             <div className="card h-100 singleCard">
                 <img src={img} className="card-img-top" alt="" />
                 <div className="card-body cardDetails">
                     <h4>Name: <span>{name}</span> </h4>
                     <p>Net Worth : {net_worth}</p>
                     <p>From : {country} </p>
                     <p>Profession : {profession} </p>
                     <p><b>Hire Amount : <span>৳ {salary}</span> </b></p>
                     <Rating
                        initialRating={star}
                        readonly
                        emptySymbol="far fa-star rating"
                        fullSymbol="fas fa-star rating"
                     />
                     <br />
                     <button 
                     onClick={()=> props.addToCart(props.singer)} 
                     className='addcartbtn'><i className="fas fa-cart-plus"></i> add to cart</button>
                 </div>
                  
             </div>
        </div>
    );
};

export default Data;