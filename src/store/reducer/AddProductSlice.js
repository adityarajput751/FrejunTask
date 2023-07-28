import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  data: null,
};

export const AddProduct = createAsyncThunk('addProductdata', async data => {
  console.log(data, 'fdsf');
  const response = await axios.post('https://dummyjson.com/products/add', data);
  console.log(response, 'respgthtonse');
  return response.data;
});

const addProduct = createSlice({
  name: 'addProductdata',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(AddProduct.pending, state => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = null;
        state.data = null;
      })
      .addCase(AddProduct.fulfilled, (state, action) => {
        console.log(action, 'fdsfnjsfhgfhgfhjeoiwjf');
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.data = action?.payload;
        console.log(action, 'gregewvgh');
      })
      .addCase(AddProduct.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
        state.data = null;
        console.log(action, 'dfiewofjdsbu');
      });
  },
});

export default addProduct.reducer;
