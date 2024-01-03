import { createSlice } from '@reduxjs/toolkit';

const isloggedslice = createSlice({
    name: 'islogged',
    initialState: {
        status: false
    },
    reducers:{
        Loggedin(state,action){
            state.status = action.payload
        }
    }
})

export const {Loggedin}=isloggedslice.actions
export default isloggedslice.reducer