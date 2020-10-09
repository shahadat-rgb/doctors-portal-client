import React from 'react';
import dental from '../../../images/Mask Group 3.png'
const ExceptionalDental = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img style={{height:'600px',width:'100%'}} src={dental} alt=""/> 
                </div>
                <div className="col-md-6">
                    <h2 style={{color:'#3a4256',marginTop:'60px'}} >Exceptional Dental <br/> Care,on Your Terms</h2>
                     <p  className='text-secondary mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla id eos minima accusantium! Explicabo adipisci sunt fugiat corrupti quam optio porro commodi eveniet deserunt, voluptate suscipit, minima ipsa earum quasi nam tempora nisi itaque numquam rem delectus assumenda aliquam laudantium fuga. Rerum blanditiis recusandae facere neque ut voluptatibus eius optio vel deserunt alias cumque ullam unde totam eligendi eum tenetur, nemo voluptatum nulla inventore vero fuga?!</p>
                    <button className="appoenment-btn mt-5">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;