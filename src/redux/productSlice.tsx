import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import { IStatus } from "../types/statusTypes";

const initialState: IStatus = {
    products:[],
    productsStatus : 'idle',
    productDetail : [],
    productDetailStatus: 'idle'
}

export const getProducts = createAsyncThunk('getproducts', async() =>{
    const responnse = await fetch('https://fakestoreapi.com/products')
    const data = await responnse.json()
    return data
})

export const getDetailProduct = createAsyncThunk('getproduct', async(id) =>{
    const responnse = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await responnse.json()
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers :(builder) =>{
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productsStatus = 'loading'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = 'success'
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = 'fail'
        })
        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = 'loading'
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = 'success'
            state.productDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = 'fail'
        })
    }
})

export default productSlice.reducer