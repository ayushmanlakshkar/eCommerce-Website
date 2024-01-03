import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        Cart_add(state, action) {
            state.products.push(action.payload);
        },
        Cart_remove(state, action) {
            const indexToRemove = state.products.findIndex(product => (
                product.id === action.payload.id
            ));
            if (indexToRemove !== -1) {
                state.products.splice(indexToRemove, 1);
            }
        }
    }
})

export const { Cart_add, Cart_remove } = cartslice.actions
export default cartslice.reducer