import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const AllProducts = () => {

    const [activateCategory, setActiveCategory] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [activeProducts, setActiveProducts] = useState([]);

    const allData = useLoaderData();

    useEffect(() => {
        setAllProducts(allData);
        setActiveProducts(allData);
    }, [])

    return (
        <div className="content col-span-10">
            <div className='grid grid-cols-3 gap-5'>
                {
                    activeProducts.map(product => <Product key={product.product_id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;