import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cartContext } from '../Root/Root';
import Modal from '../Modal/Modal';
import { useLoaderData, useNavigate } from 'react-router-dom';
import modalImage from '../../assets/Group.png'

const CheckOut = () => {

    const { cart, setCart } = useContext(cartContext);
    const allProducts = useLoaderData() || [];
    const [cartProduct, setCartProduct] = useState([]);
    const [selectedOption, setSelectedOption] = useState("default");
    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const newCartProducts = [];
        for (const id of cart) {
            const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
            if (product) {
                newCartProducts.push(product);
            }
        }
        setCartProduct(newCartProducts);
    }, [cart, allProducts]);


    useEffect(() => {
        let cost = 0;
        const sum = cartProduct.reduce((p, c) => p + c.price, 0);
        setTotalCost(sum);
    }, [cartProduct]);


    const openModal = () => setIsModalOpen(true);
    const navigate = useNavigate();
    const closeModal = () => {
        setIsModalOpen(false);
        setTotalCost(0);
        setCartProduct([]);
        setCart([]);
        navigate('/');

    }



    return (
        <div>
            <Helmet>
                <title>SmartShop| CheckOut</title>
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />
            </Helmet>

            <div className='bg-primary mt-3 py-5 text-white'>
                <h1 className='text-center text-2xl font-bold'>Checkout ({cart.length} items)</h1>
                <p className='text-center'>Total Cost: {totalCost} Taka</p>
            </div>

            <div className='border mt-3 mx-10 py-3 border-gray-400 '>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='   '>
                        <h1 className='font-bold text-2xl text-center'>Enter a new shipping address</h1>

                        <div className='border mx-3 mt-2 border-gray-400'>
                            <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                                <form className="card-body  ">

                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Your name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input  input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your current address</span>
                                        </label>
                                        <input type="text" placeholder="address" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">City</span>
                                        </label>
                                        <input type="text" placeholder="city" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone number</span>
                                        </label>
                                        <input type="phone" placeholder="phone number" className="input input-bordered" required />

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className=''>
                        <h2 className='font-bold text-2xl text-center'>Payment Method</h2>
                        <div className=' mx-3 mt-2 '>
                            <select
                                className="select select-primary w-full"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="default" disabled>
                                    What is the best payment choice?
                                </option>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                            </select>

                        </div>
                    </div>
                </div>

                <div className="form-control w-3/12  mt-6 mx-auto">
                    <button onClick={openModal} className="btn  btn-secondary bg-primary text-white">Order Now</button>
                </div>


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

export default CheckOut;