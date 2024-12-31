import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({ product, handleRemoveCart }) => {

    const { product_id, product_image, product_title, description, price } = product;


    return (
        <div className='mx-10 mt-5 rounded-xl px-5 py-3  border border-gray-200  flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <img className='rounded-2xl h-[300px] w-[300px]' src={product_image} alt="" />
                <div className='flex flex-col '>
                    <h3 className='text-lg font-bold'>{product_title}</h3>
                    <p>{description}</p>
                    <h4 className='font-bold'>Price: ${price}</h4>
                </div>
            </div>

            <button onClick={() => {
                handleRemoveCart(product_id);
            }}
            >
                <TiDeleteOutline className='text-red-400 text-5xl' />
            </button>
        </div>
    );
};

export default Cart;