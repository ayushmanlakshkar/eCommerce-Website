import { configureStore } from '@reduxjs/toolkit';
import isloggedReducer from './slices/isloggedslice';
import filterreducer from './slices/filterslice';
import allproductsreducer from './slices/allproductsslice';
import cartreducer from './slices/cartslice';
import productcategoryreducer from './slices/productcategoryslice';
import isSearchingreducer from './slices/isSearchingslice';
const store = configureStore({
    reducer: {
        islogged: isloggedReducer,
        filter:filterreducer,
        allproducts:allproductsreducer,
        cart:cartreducer,
        productCategory:productcategoryreducer,
        isSearching:isSearchingreducer
    }
});
export default store;
