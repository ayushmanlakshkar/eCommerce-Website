import { createSlice } from '@reduxjs/toolkit';

const filterslice = createSlice({
    name: 'filter',
    initialState: {
        order:''
    },
    reducers:{
       Order(state,action){
            state.order = action.payload
        }
    }
})

export const {Order}=filterslice.actions
export default filterslice.reducer