import { createSlice } from '@reduxjs/toolkit';

const isSearchingslice = createSlice({
    name: 'isSearching',
    initialState: {
        status: false,
        input:''
    },
    reducers:{
        isSearching(state,action){
            if(action.payload.status){
                state.status=action.payload.status;
                state.input=action.payload.input;
            }else{
                state.status=action.payload.status;
                state.input=''
            }
        }
    }
})

export const {isSearching}=isSearchingslice.actions
export default isSearchingslice.reducer