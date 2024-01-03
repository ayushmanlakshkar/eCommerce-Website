import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { Cart_add, Cart_remove } from '../store/slices/cartslice';
import StarRateIcon from '@mui/icons-material/StarRate';

function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const productCategory = useSelector(state => state.productCategory.allProducts)
    const cart_items = useSelector(state => state.cart.products)
    const issearching = useSelector(state => state.isSearching)
    const filter = useSelector(state => state.filter.order)
    const dispatch = useDispatch()

    const Add_to_cart = (product) => {
        dispatch(Cart_add(product))
    }
    const Remove_from_cart = (product) => {
        dispatch(Cart_remove(product))
    }
    
    // const filterProducts=()=>{
    //     products
    //     .sort((a, b) => {
    //       const priceA = a.price;
    //       const priceB = b.price;
    //       if (filter === 'asc') {
    //         return priceA - priceB;
    //       } else if (filter === 'desc') {
    //         return priceB - priceA;
    //       }
          
    //     });
    //     // setProducts(SortedProducts)
    // }

    const compilingProducts = async () => {
        if (productCategory) {
            const token = localStorage.getItem('token')
            if (token) {
                const response = await fetch('https://dummyjson.com/products')
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                if(issearching.status){
                    const filtered_products = data.products.filter((product)=>product.title.toLowerCase().includes(issearching.input))
                    console.log(filtered_products)
                    setProducts(filtered_products)
                }else{
                    setProducts(data.products)
                }
            } else {
                setError("User not logged in")
            
            }
        } else {
            if(issearching.status){
                const filtered_products = cart_items.filter((product)=>product.title.toLowerCase().includes(issearching.input))
                console.log(filtered_products)
                setProducts(filtered_products)
            }else{
                setProducts(cart_items)
            }
        }

        
    }

    const handlefilter = ()=>{
        if (filter !== '') {
            const sorted=[...products].sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                if (filter === 'asc') {
                  return priceA - priceB;
                } else if (filter === 'desc') {
                  return priceB - priceA;
                }
              });
              setProducts(sorted)
        }
    }

    useEffect(() => {
        compilingProducts()
        console.log("chala")
    }, [productCategory, cart_items, issearching])


    useEffect(() => {
        if(filter !== '') {
            handlefilter()
        }else{
            compilingProducts()
        }
      }, [filter]);


    return (
        <div className='products'>
            {error ? error : <>
                <>
                    {products.map((product) => {
                        return (
                            <div className='product-card' key={product.id}>
                                <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
                                <div className='product-details'>
                                    <h3>{product.title}</h3>
                                    {product.stock > 0 ? <span className='available-product'>Available : {product.stock}</span> : <span className='notavailable-product'>Not available</span>}
                                    <div className='product-description'>{product.description}</div>
                                    <hr />
                                    <div className='price-section'>
                                        <span className='realprice'>${product.price}</span>
                                        <span className='discountedprice'>{product.discountPercentage} % Discount</span>
                                    </div>
                                    <span className='product_rating'><StarRateIcon />{product.rating}</span>
                                    {
                                        productCategory ?
                                            <button className='add_to_cart_button' onClick={() => { Add_to_cart(product) }}>Add to Cart</button> :
                                            <button className='remove_from_cart_button' onClick={() => { Remove_from_cart(product) }}>Remove from Cart</button>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </>
            </>}
        </div>
    )
}

export default Products
