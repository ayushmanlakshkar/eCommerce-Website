import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/slices/productcategoryslice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { isSearching } from '../store/slices/isSearchingslice';
import { Order } from '../store/slices/filterslice';
import { Loggedin } from '../store/slices/isloggedslice';

function Home() {
    const [input,setInput]=useState('')
    const issearching =useSelector(state=>state.isSearching.status)
    const cart_items = useSelector(state => state.cart.products)
    const productCategory = useSelector(state => state.productCategory.allProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleCartclick = () => {
        dispatch(setCategory())
    }
    const search_products=()=>{
        dispatch(isSearching({status:true,input:input}))
    }
    const close_search_products = ()=>{
        dispatch(isSearching({status:false}))
        setInput('')
    }
    const handlefilter=(e)=>{
        dispatch(Order(e.target.value))
    }
 const handlelogout=()=>{
    localStorage.removeItem('token');
    dispatch(Loggedin(false))
    navigate('/')
 }
    return (
        <div className='homepage'>
            <div className='nav'>
{issearching?<IconButton sx={{color:"white"}} onClick={close_search_products}>
                    <ArrowBackIcon/>
                </IconButton>:<></>}
                <input className='input_product' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                <button className='search_product' onClick={search_products}>Search</button>
                <div className={productCategory ? 'cart_button_notselected' : 'cart_button_selected'}>
                    <IconButton aria-label="cart" onClick={handleCartclick}>
                        <Badge badgeContent={cart_items.length} color="secondary">
                            <ShoppingCartIcon sx={{ color: "white" }} />
                        </Badge>
                    </IconButton>
                </div>
                <a className='logout_button' onClick={handlelogout}>Log Out</a>
                <div className='filter_price_wrapper'>
                    <label className='filter_price'>Filter Price : </label>
                    <select name="price" className="filter_price" onChange={handlefilter}>
                        <option value="">none</option>
                        <option value="asc">Low To High</option>
                        <option value="desc">High To Low</option>
                    </select>
                </div>
            </div>

            <Products />
        </div>
    )
}

export default Home
