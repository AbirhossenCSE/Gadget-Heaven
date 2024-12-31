import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const WishList = ({ product, handleAddToCart, handleRemoveWish }) => {
    
    const { product_id, product_image, product_title, description, price } = product;

    return (
        <div className='m-10 rounded-xl px-5 py-3 border border-gray-200  flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <img className='rounded-2xl h-[300px] w-[300px]' src={product_image} alt="" />
                <div className='flex flex-col '>
                    <h3 className='text-lg font-bold'>{product_title}</h3>
                    <p>{description}</p>
                    <h4 className='font-bold'>Price: ${price}</h4>

                    <button onClick={() => {
                        handleAddToCart(product_id)

                    }} className='bg-primary mt-3 text-white border w-1/3 border-primary rounded-[32px] px-3 py-2 '>Add to Cart</button>

                </div>
            </div>
            <button onClick={() => { handleRemoveWish(product_id) }
            }
            >
                <TiDeleteOutline className='text-red-400 text-5xl' />
            </button>
        </div>
    );
};

export default WishList;

