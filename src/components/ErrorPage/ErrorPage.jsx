import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
              <Navbar></Navbar>
              <div className='w-10/12 mx-auto'>
                <img className='mx-auto' src="https://i.ibb.co.com/NrGjttC/404.gif" alt="" />
              </div>
              <Footer></Footer> 


        </div>
    );
};

export default ErrorPage;