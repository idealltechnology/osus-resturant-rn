import AsyncStorage from '@react-native-async-storage/async-storage';
import globalListReducer from './slice/globalListSlice';
import TransactionReducer from './slice/Transaction';
import { configureStore } from '@reduxjs/toolkit';
import TradeReducer from './slice/AdvanceTrade';
import { persistReducer } from 'redux-persist';
import tokenReducer from './slice/tokenSlice';
import userReducer from './slice/userSlice';
import homeReducer from './slice/homeSlice';
import { combineReducers } from 'redux';
import CoinReducer from './slice/Coin';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer,
  homeReducer,
  tokenReducer,
  globalListReducer,
  TradeReducer,
  TransactionReducer,
  CoinReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['tokenReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const appDispatch = store.dispatch;
