import React from 'react';


// https://i.ibb.co.com/nwmvGpR/laptop-1-1.jpg
// https://i.ibb.co.com/wKk6v17/laptop-1-2.jpg
// https://i.ibb.co.com/wR8St7M/laptop-1-3.jpg
// https://i.ibb.co.com/K7bD4fn/laptop-1-4.jpg
// https://i.ibb.co.com/hZ6HYCy/laptop-1-5.jpg
// https://i.ibb.co.com/HT5d35v/laptop-1-6.jpg
// https://i.ibb.co.com/Z2QMsfF/laptop-1-7.jpg

const Footer = () => {
    return (
        <div className='mt-8'>
             <div className='flex flex-col justify-center'>
                 <h1 className='text-2xl font-bold text-center'>SmartShop</h1>
                 <p className='text-center'>Explore the latest gadgets that will take your experience to the next level.</p>
             </div>

             <section className='flex justify-between px-20 pt-5'>
                  <div>
                         <h2 className='font-bold'>Services</h2>

                        
                         <ul className='flex flex-col gap-2 pt-4'>
                            <a href="">Product Support</a>
                            <a href="">Order Tracking</a>
                            <a href="">Shipping & Delivery</a>
                            <a href="">Returns</a>
                         </ul>
                  </div>

                  <div>
                         <h2 className='font-bold'>Company</h2>
                         <ul className='flex flex-col gap-2 pt-4' >
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                           
                         </ul>
                  </div>
                  <div>
                         <h2 className='font-bold'>Legal</h2>                       
                         <ul className='flex flex-col gap-2 pt-4'>
                            <a href="">Terms of Services</a>
                            <a href="">Privacy Policy</a>
                           
                         </ul>
                  </div>

             </section>
        </div>
    );
};

export default Footer;