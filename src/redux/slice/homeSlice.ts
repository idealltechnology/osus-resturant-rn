import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface homeState {
  UserInfo: any;
  UserAction: any;
  Coin: any;
  Token: any;
  UserLoggedIn: boolean;
  CheckTransaction: boolean
}
const initialState: homeState = {
  UserInfo: undefined,
  UserAction: undefined,
  Coin: undefined,
  Token: undefined,
  UserLoggedIn: false,
  CheckTransaction: false
};

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState,

  reducers: {
    SET_TOKEN_TEMP: (state, action: PayloadAction<homeState>) => {
      state.Token = action.payload;
    },
    SET_LOGGED_IN: (state, action: PayloadAction<boolean>) => {
      state.UserLoggedIn = action.payload;
    },
    SET_USER_INFO: (state, action: PayloadAction<homeState>) => {
      state.UserInfo = action.payload;
    },
    SET_COIN: (state, action: PayloadAction<homeState>) => {
      state.Coin = action.payload;
    },
    SET_USER_ACTION: (state, action: PayloadAction<homeState>) => {
      state.UserAction = action.payload;
    },
    SET_CHECK_TRANSACTION: (state, action: PayloadAction<boolean>) => {
      state.CheckTransaction = action.payload;
    },
  },
});

export const { SET_USER_INFO, SET_COIN, SET_USER_ACTION, SET_TOKEN_TEMP, SET_LOGGED_IN, SET_CHECK_TRANSACTION } = homeSlice.actions;
const homeReducer = homeSlice.reducer;
export default homeReducer;
