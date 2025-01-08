import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState : [],
    reducers:{
        addToWhishlist:(state,actionFromView)=>{
         state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromView)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})
export const {addToWishlist,removeItem} = wishlistSlice.actions
export default wishlistSlice.reducer