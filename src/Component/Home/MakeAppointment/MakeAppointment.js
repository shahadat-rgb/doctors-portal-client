import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
      <section>
          <div className="container make-appointment">
              <div className="row">
                <div className="col-md-5 d-none d-md-block">
                  <img  src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className='text-primary text-uppercase'>appointment </h5>
                    <h1 className='my-4'>Make appointment <br/>Today </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nam cumque nihil dolor nisi voluptatem?Eligendi nam cumque nihil dolor nisi voluptatem?</p>
                    <button className='appoenment-btn mt-3'>make appointment</button>
                </div>
              </div>
          </div>
      </section>
    );
};

export default MakeAppointment;