import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../Root/Root';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import modalImage from '../../assets/Group.png'
import { Helmet } from 'react-helmet-async';

const CartDetails = () => {

    const { cart, setCart } = useContext(cartContext);
    const [cartProduct, setCartProduct] = useState([]);
    const allProducts = useLoaderData();
    const [totalCost, setTotalCost] = useState(0);
    const openModal = () => setIsModalOpen(true);
    const navigate = useNavigate();


    useEffect(() => {
        const newCartProducts = [];
        for (const id of cart) {
            const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
            if (product) {
                newCartProducts.push(product);
            }
        }
        setCartProduct(newCartProducts);
    }, [cart]);

    
    useEffect(() => {
        let cost = 0;
        const sum = cartProduct.reduce((p, c) => p + c.price, 0);
        setTotalCost(sum);
    }, [cartProduct]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const closeModal = () => {
        setIsModalOpen(false);
        setTotalCost(0);
        setCartProduct([]);
        setCart([]);
        navigate('/');

    }

    const handleRemoveCart = (x) => {
        const newCarts = cart.filter(p => p != x);
        setCart(newCarts);
    }


    return (
        <div>
            <Helmet>
                <title>SmartShop | Cart List</title>
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />
            </Helmet>

            <div className='bg-primary py-5 mt-4 text-white'>
                <h1 className='text-center text-2xl font-bold'>Your Cart List</h1>

                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div>
                {
                    (totalCost > 0) &&
                    <>
                        <div className='px-10 pt-3 flex items-center justify-between'>
                            <h2 className='font-bold text-xl'>Cart</h2>
                            <div className='flex items-center gap-5'>
                                <h1 className='font-bold text-lg'>Total cost: {totalCost}</h1>
                                <button
                                    onClick={() => {
                                        const sortCarts = [...cartProduct].sort((a, b) => (b.price - a.price));
                                        setCartProduct(sortCarts);
                                    }}
                                    className='border border-yellow-700 text-primary rounded-[32px] font-bold px-4 py-2'>Short by Price</button>
                                <Link to={'/checkOut'} className='border border-primary text-white bg-primary  rounded-[32px] font-bold px-4 py-2'>Purchase</Link>
                            </div>
                        </div>
                        <div>
                            {
                                cartProduct.map((product, idx) => <Cart key={idx} handleRemoveCart={handleRemoveCart} product={product} ></Cart>)
                            }
                        </div>
                    </>
                }
            </div>



            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <img className='mx-auto' src={modalImage} alt="" />
                <h2 className='text-xl font-bold text-center'>Payment Successfully</h2>
                <div className='py-3'>
                    <p className='text-center'>Thanks for purchasing</p>
                    <p className='text-center'>Total: {totalCost}</p>
                </div>
                <button className='mt-3 border w-full rounded-[32px] px-4 py-2 border-gray-200 bg-gray-200 text-center font-bold' onClick={closeModal}>Close</button>
            </Modal>

        </div>
    );
};

export default CartDetails;