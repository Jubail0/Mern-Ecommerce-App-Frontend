import{configureStore,combineReducers}from"@reduxjs/toolkit"
import userReducer from '../redux/userSlice.js'
import productReducer from '../redux/product.js'
import cartReducer from '../redux/cart.js';
import adminReducer from '../redux/admin.js'
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key:'root',
  version:1,
  storage,
}

const rootReducers = combineReducers({
  user:userReducer,  
  cart:cartReducer,
  product:productReducer,
  admin:adminReducer
 
})

const persistedReducer = persistReducer(persistConfig,rootReducers)
 
  export const store = configureStore({
    reducer:persistedReducer,
    
   
})

