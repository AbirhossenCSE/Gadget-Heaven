import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import { cartContext } from '../Root/Root';
import { toast } from 'react-toastify';
import { BsCart3 } from 'react-icons/bs';

const Product = ({ product }) => {
  const { product_id, product_image, product_title, price } = product;
  const { cart, setCart } = useContext(cartContext);
  return (
    <div className='bg-white p-4'>
      <img src={product_image} className='h-[300px]' alt={product_title} />
      <h2 className='font-bold text-lg'> {product_title} </h2>
      <h3>Price: {price}k </h3>

      <Link to={`/product/${product_id}`}>
        <button className='border mt-2 border-primary rounded-[32px] bg-body px-4 py-2 font-bold text-primary  '>View Details</button>
      </Link>
      <button onClick={() => {
        setCart((prev) => [...prev, product_id]);
        toast(`${product_title} is added to your cart list.`);

      }} className='bg-primary ml-4 text-white border border-primary rounded-[32px] px-3 py-2 '>  <div className='flex items-center gap-1'> Add To Cart  <BsCart3></BsCart3>  </div> </button>

    </div>
  );
};

export default Product;