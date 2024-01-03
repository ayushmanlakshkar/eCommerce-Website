import { createSlice } from '@reduxjs/toolkit';

const productcategoryslice = createSlice({
    name: 'productCategory',
    initialState: {
        allProducts: true
    },
    reducers:{
        setCategory(state,action){
            state.allProducts=!state.allProducts
        }
    }
})

export const {setCategory}=productcategoryslice.actions
export default productcategoryslice.reducer