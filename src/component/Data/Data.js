import React from 'react';
import Rating from 'react-rating';
import './Data.css';
const Data = (props) => {
    const {img, name, net_worth, country, profession, salary,star} = props.singer
    return (
        <div>
             <div className="card h-100 singleCard">
                 <img src={img} className="card-img-top" alt="" />
                 <div className="card-body cardDetails">
                     <h5>Name:{name}</h5>
                     <p>Net Worth : {net_worth}</p>
                     <p>From : {country} </p>
                     <p>Profession : {profession} </p>
                     <p><b>Hire Amount : ৳ {salary}</b></p>
                     <Rating
                        initialRating={star}
                        readonly
                        emptySymbol="far fa-star rating"
                        fullSymbol="fas fa-star rating"
                     />
                     <br />
                     <button 
                     onClick={()=> props.addToCart(props.singer)} 
                     className='addcartbtn'><i class="fas fa-cart-plus"></i> add to cart</button>
                 </div>
                  
             </div>
        </div>
    );
};

export default Data;