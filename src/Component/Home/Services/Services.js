import React from 'react';
import ServicesDetails from '../ServiceDetails/ServicesDetails';
import flouride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import teet from '../../../images/tooth.png';

const servicesData=[
    {
        name:'Flouride Treatment',
        img:flouride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teet Whitening',
        img:teet
    }
]

const Services = () => {
    return (
       <section className='services-container mt-5'>
          <div className='text-center'>

          <h5 style={{color:'#1CC7C1'}}>OURE SERVICES</h5>
          <h2 style={{color:'#3a4256'}}>Services We Provider</h2>
          </div>
          <div className='d-flex justify-content-center'>
         <div className='w-75 row mt-5 pt-5'>
        {
           servicesData.map(service => <ServicesDetails service={service}></ServicesDetails>)
        }
         </div>
      </div>
       </section>
    );
};

export default Services;