import './Students.css'
import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';
import Cart from '../Cart/Cart';

const Students = () => {
    const [students, setStudents]= useState([]);
    const [cart, setCart] = useState([]);

    const handleAddCart = (student)=>{        
        const newCart = [...cart,student];
        setCart(newCart)
    }

    useEffect(()=>{
        fetch('./students.JSON')
        .then(res=>res.json())
        .then(data=>setStudents(data) )
    },[])
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-9">
                    <div className="row">
                        {
                            students.map(student =><Student
                            key={student.key}
                            student={student}
                            handleAddCart= {handleAddCart}
                            ></Student>)
                        }
                        
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Students;