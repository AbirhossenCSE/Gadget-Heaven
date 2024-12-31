import React, { useContext, useEffect, useState } from 'react';
import { WishContext, cartContext } from '../Root/Root';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import modalImage from '../../assets/Group.png'
import WishList from '../WishList/WishList';
import { Helmet } from 'react-helmet-async';

const WishDetails = () => {
    const { wish, setWish } = useContext(WishContext);
    const { cart, setCart } = useContext(cartContext);
    const allProducts = useLoaderData() || [];
    const [wishProduct, setWishProduct] = useState([]);


    useEffect(() => {
        const newWishProducts = [];
        for (const id of wish) {
            const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
            if (product) {
                newWishProducts.push(product);
            }
        }
        setWishProduct(newWishProducts);
    }, [wish]);

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const newWishProducts = [];
        for (const id of wish) {
            const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
            if (product) {
                newWishProducts.push(product);
            }
        }
        setWishProduct(newWishProducts);
    }, [wish]);
    const handleAddToCart = (x) => {

        setCart([...cart, x]);
        const product = allProducts.find(p => p.product_id == x);
        const productTitle = product.product_title;
        toast(`${productTitle} is added to your cart list.`);
    }
    const handleRemoveWish = (x) => {
        const newWishLists = wish.filter(p => p != x);
        setWish(newWishLists);

    }
    const [isModalOpen, setIsModalOpen] = useState(false);



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
                <title>SmartShop | Wish List</title>
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />

            </Helmet>
            <div className='bg-primary py-5 mt-4 text-white'>
                <h1 className='text-center text-2xl font-bold'>Your Wish List</h1>

                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div>
                {
                    (wishProduct.length > 0) &&
                    <>
                        <div className='px-10 pt-3 flex items-center justify-between'>
                            <h2 className='font-bold text-xl'>WishList</h2>
                        </div>

                        <div>
                            {
                                wishProduct.map((product, idx) => <WishList key={idx} handleRemoveWish={handleRemoveWish} handleAddToCart={handleAddToCart} product={product} ></WishList>)
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

export default WishDetails;