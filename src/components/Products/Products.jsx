import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import Laptop from '../Laptop/Laptop';
// import AllProducts from '../AllProducts/AllProducts';

const Products = () => {

    const [activateCategory, setActiveCategory] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [activeProducts, setActiveProducts] = useState([]);

    const allData = useLoaderData();

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/allProducts.json')
            .then(res => res = res.json())
            .then(data => {
                setAllProducts(data)
                setActiveProducts(data)
            }
            );
    }, [])

    const handleCategory = category => {

        const newData = allProducts.filter(p => p.category == category);

    }
    const location = useLocation();

    const path = location.pathname;


    useEffect(() => {
        if (path === '/products/laptops') {
            // setHeading('Upgrade Your Tech');
        }
        else if (path === '/statistics') {
            // setHeading('Statistics');

        }
        else if (path === '/dashboard') {
            //setHeading('Dashboard');
        }
    }, [path])

    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Products </title>
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />

            </Helmet>

            {
                path !== '/' &&
                <div className='bg-primary py-5 text-white'>
                    <h1 className='text-center text-2xl font-bold'>Our Products</h1>
                    <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            }

            <div className='p-10'>
                <h1 className='text-3xl font-bold text-center pb-4'>Explore Cutting-Edge Gadgets</h1>

                <section className='grid grid-cols-12 gap-8'>


                    <div className="sidebar col-span-2 ">
                        <div className='border border-gray-300 rounded-xl p-4'>
                            <div className='pt-5 flex flex-col gap-3'>
                                <button onClick={() => {
                                    navigate('/products');
                                    handleCategory('Laptop')

                                }}
                                    className={`border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black ${((path === '/products') || (path === '/')) ? 'bg-primary text-white' : ''}`}
                                >All Products
                                </button>

                                <button onClick={() => {
                                    navigate('/products/laptops');
                                    handleCategory('Laptop')

                                }}
                                    className={`border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black ${path === '/products/laptops' ? 'bg-primary text-white' : ''}`}
                                >Laptops
                                </button>
                                <button onClick={() => {
                                    navigate('/products/phones');
                                    handleCategory('Phones')
                                }}
                                    className={`border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black ${path === '/products/phones' ? 'bg-primary text-white' : ''}`}

                                >Phones</button>

                                <button onClick={() => {
                                    navigate('/products/accessories');
                                    handleCategory('Accessories')
                                }
                                }
                                    className={`border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black ${path === '/products/accessories' ? 'bg-primary text-white' : ''}`}

                                >Accessories</button>
                                <button onClick={() => { handleCategory('Smart Watches') }} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Smart Watches</button>
                                <button onClick={() => { handleCategory('MacBook') }} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>MacBook</button>
                                <button onClick={() => { handleCategory('Iphone') }} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Iphone</button>
                            </div>

                        </div>

                    </div>
                    {
                        path === '/' ?
                            <div className="content col-span-10">

                                <div className='grid grid-cols-3 gap-5'>

                                    {
                                        activeProducts.map(product => <Product key={product.product_id} product={product} ></Product>)
                                    }
                                </div>

                            </div>
                            : <Outlet />
                    }

                </section>
            </div>
        </>
    );
};

export default Products;