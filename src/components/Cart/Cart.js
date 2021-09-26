import './Cart.css'

import React from 'react';

const Cart = (props) => {
    const {cart} = props

    const sumReducer = (prevValue,currentValue) => prevValue + currentValue.Donation;
    
    const total = cart.reduce(sumReducer, 0).toFixed(2)


    return (
        <div>
                <div className="card card_color card_position shadow" style={{"width": "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title">Members & Donations </h5>
                    <p className="card-text">Interested to Join: <b>{cart.length}</b></p>
                    <ul>
                        {
                            cart.map(student => <li key={student.Job}>{student.name}</li>)
                        }
                    </ul>
                    <p className="card-text">Total Donation: <b>{total}</b> Taka</p>

                    <a href="/#" className="btn btn-primary">Join in Journey</a>
                </div>
                </div>
            </div>
    );
};

export default Cart;