import React from 'react';
import './Cartdata.css';
const Cartdata = (props) => {
const {name,img,salary} = props.singer
    return (
        <div>
          <div className="row cart">
              <div className="col-lg-3 cartImg">
                  <img src={img} width="100%" alt="" />
              </div>
              <div className="col-lg-9 singerdata">
              <h6>Name: {name}</h6> 
              <p><b> Hire Amount: <span> ৳ {salary}</span> </b></p> 
              </div>
          </div>
        </div>
    );
};

export default Cartdata;