import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

export const getProduct = createAsyncThunk(
  'product',
  async credentials => {
    console.log(credentials,'poiuytrew');
    const response = await axios.get(
        `https://dummyjson.com/products/${credentials}`
    );
    console.log(response,'resgfgtponse');
    return response.data;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, state => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = null;
        state.token = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        console.log(action,'hygfsefeg');
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.data = action;
        console.log(action,'done');
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
        state.token = null;
        console.log(action.error.message,'productReject');
      });
  },
});

export default productSlice.reducer;
