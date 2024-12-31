import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export const cartContext = createContext([]);
export const WishContext = createContext([]);
export const userContext = createContext('');


const Root = () => {
    const [cart, setCart]= useState([]);
    const [wish, setWish]= useState([]);
    const [userName, setUserName] = useState('');

    // console.log('Hello,', userName);
    const location = useLocation();
 const path= location.pathname;
//  console.log('Root Path',path);
    return (
        <cartContext.Provider value={{ cart, setCart }}>
        <WishContext.Provider value={{ wish, setWish }}>

            <userContext.Provider value={{userName, setUserName}}>

            <div className=''>
                <Navbar />
                <Outlet />
                
                 {
                    (
                        (path==='/products') ||
                        (path==='/statistics') ||
                        (path==='/dashboard') || 
                        (path==='/signIn')  ||
                        (path==='/cartList') ||
                        (path==='/wishList')  ||
                        (path==='/checkOut')
                        
                    ) 
                    && 
                    <> <Footer></Footer>
                    </>
                    
                } 


            </div>

            </userContext.Provider>
        
            
       
        </WishContext.Provider>

        </cartContext.Provider>
    );
};

export default Root;