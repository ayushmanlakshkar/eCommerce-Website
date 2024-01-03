import { createSlice } from '@reduxjs/toolkit';

const allproductsslice = createSlice({
    name: 'allproducts',
    initialState: {
        products:[]
    },
    reducers:{
       Products(state,action){
        state.products = [...action.payload]
        }
    }
})

export const {Products}=allproductsslice.actions
export default allproductsslice.reducer