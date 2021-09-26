import './Student.css'
import React from 'react';

const Student = (props) => {
    const{name,Batch,img,Residence,Job,Donation}= props.student
    return (
        
            <div className="col-md-4 mb-4">
                <div className="card card_color text-center shadow" style={{"width": "18rem"}}>
                <img src={img} className="card-img-top img_size" alt="..."/>
                <div className="card-body cart_text">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Occupation: {Job}</p>
                    <p className="card-text">Residence: {Residence}</p>
                    <p className="card-text">Batch: {Batch}</p>
                    <h4 className="mt-2">Donations:{Donation}</h4>

                    <a href="#/" onClick={()=> props.handleAddCart(props.student)} className="btn btn-primary mt-3"><i className="fas fa-handshake"></i>Add to Join</a>
                </div>
                </div>
            </div>
       
    );
};

export default Student;