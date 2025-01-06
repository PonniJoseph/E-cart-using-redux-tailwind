import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
 export const fetchProducts = createAsyncThunk("product/fetchProducts" , async () =>{
    const  result = await axios.get("https://dummyjson.com/products")
    console.log(result);
    return result.data.products
    
 })


 const productSlice =createSlice({
    name:"product",
    initialState:{
        allProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload
            state.loading= false
            state.errorMsg=""
        })

        builder.addCase(fetchProducts.pending,(state,apiResult)=>{
            state.allProducts = []
            state.loading= true
            state.errorMsg=""
        })

        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts =[]
            state.loading= false
            state.errorMsg="API call failed"
        })
    }
 })
 export default productSlice
 