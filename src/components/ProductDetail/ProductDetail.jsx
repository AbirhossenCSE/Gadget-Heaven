import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { WishContext, cartContext } from '../Root/Root';
import { BsCart3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { toast } from "react-toastify";
import Footer from '../Footer/Footer';


const ProductDetail = () => {

    const { cart, setCart } = useContext(cartContext);
    const { wish, setWish } = useContext(WishContext);

    const allProducts = useLoaderData();
    const { product_id } = useParams();
    let idx = product_id;

    const product = allProducts.find(p => p.product_id == product_id);

    const { product_title, product_image, price, description, Specification, availability, rating } = product;

    const p_spec = { Specification };

    const specifications = p_spec.Specification;


    return (

        <>
            <div className='relative  '>
                <div className={`  text-white  absolute left-0 right-0   rounded-3xl pb-24 bg-primary   `}>
                    <div className='bg-primary py-5 text-white'>
                        <h1 className='text-center text-2xl font-bold'>Product Details</h1>
                        <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>
                <div className='absolute left-0 top-24  right-0'>
                    <div className='px-20  '>
                        <div className='border   border-details px-4 py-4 rounded-[32px] w-10/12 bg-white text-black   mx-auto grid grid-cols-12 gap-5 items-center'>

                            <div className=' col-span-5'>

                                <img className='h-[400px]' src={product_image} alt={product_title} />

                            </div>

                            <div className='col-span-7'>
                                <h2 className='text-lg font-bold'>{product_title}</h2>
                                <h3>Price: ${price}</h3>

                                <button className='border border-green-300 bg-green-200 text-green-600 font-bold rounded-[32px] px-3 py-1'> {availability ? 'In Store' : 'Out of Stack'}  </button>

                                <p>{description}</p>
                                <h3 className='font-bold'>Specification:</h3>


                                <ol className="list-decimal pl-5">
                                    {
                                        specifications.map((s, idx) => <li key={idx} className="">{s}</li>)
                                    }
                                </ol>
                                <h3>Rating ⬛</h3>
                                <div className='flex items-center gap-3'>
                                    <ReactStars count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={rating}
                                    >   </ReactStars>
                                    {rating}

                                </div>
                                <div className='flex items-center gap-4'>
                                    <button onClick={() => {
                                        setCart((prev) => [...prev, product_id]);
                                        toast(`${product_title} is added to your cart list.`);
                                    }} className='bg-primary text-white border border-primary rounded-[32px] px-3 py-2 '>  <div className='flex items-center gap-1'> Add To Cart  <BsCart3></BsCart3>  </div> </button>
                                    <button onClick=
                                        {
                                            !wish.find(p_id => p_id == product_id) ?
                                                () => {

                                                    setWish((prev) => [...prev, product_id]);
                                                    toast(`${product_title} is added to your wish list.`);


                                                } : () => { }} className={`${wish.find(p_id => p_id == product_id) ? 'text-red-800 disabled' : ''}`} >  <div className='flex border border-gray-200 rounded-[50%] p-2 items-center gap-1'>   <IoIosHeartEmpty className='text-2xl' />  </div> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>

    );
};

export default ProductDetail;
