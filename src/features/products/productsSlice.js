import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        categories: [],
        loading: false,
        productDescription: [],
    },
    reducers: {
        setProductList: (state, action) => {
            state.items = action.payload.items;
            state.categories = action.payload.categories;
        },
        setLoader: (state, action) => {
            state.loading = action.payload;
        },
        setProductDesc: (state, action) => {
            state.productDescription = action.payload.items;
        }
    }
});

export const { setProductList, setLoader, setProductDesc } = productsSlice.actions
export default productsSlice.reducer