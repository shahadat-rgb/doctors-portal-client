import React from 'react';
import chair from "../../../images/Mask Group 1.png"
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main>
            <div style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                   <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1> <br/>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi alias quibusdam rem perspiciatis aliquam praesentium omnis ratione nihil numquam.</p><br/>
                    <button className='appoenment-btn'>Get Appoentment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;