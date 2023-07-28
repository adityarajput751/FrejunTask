import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: null,
  token: null,
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async credentials => {
    console.log(credentials, 'fdsf');
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      credentials,
    );
    console.log(response, 'respgthtonse');
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = null;
        state.token = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action?.payload, 'fdsfghgnjsfjeoiwjf');
        state.loading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.token = action?.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
        state.token = null;
        console.log(action, 'dfiewofjdsbu');
      });
  },
});

export default loginSlice.reducer;
