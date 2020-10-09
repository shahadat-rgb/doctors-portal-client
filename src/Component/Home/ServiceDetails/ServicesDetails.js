import React from 'react';

const ServicesDetails = ({service}) => {
    return (
         <div className='col-md-4 text-center'>
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className='mt-3 text-secondary mb-4'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eum.</p>

        </div>
    );
};

export default ServicesDetails;