import {combineReducers} from 'redux';
import LoginSlice from './reducer/LoginSlice';
import PostSlice from './reducer/PostSlice';
import ProductSlice from './reducer/ProductSlice';
import AddProductSlice from './reducer/AddProductSlice';

const rootReducer = combineReducers({
  login: LoginSlice,
  getPosts: PostSlice,
  product: ProductSlice,
  addProductdata: AddProductSlice,
});

export default rootReducer;
