import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

export const getPost = createAsyncThunk('getPosts', async credentials => {
  console.log(credentials, 'fdsf');
  const response = await axios.get('https://dummyjson.com/products');
  console.log(response, 'response');
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPost.pending, state => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = null;
        state.token = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.data = action;
        console.log(action, 'done');
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
        state.token = null;
        console.log(action.error.message, 'posterror');
      });
  },
});

export default postSlice.reducer;
