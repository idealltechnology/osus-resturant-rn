import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface State {
  Coins: any;
  loading: boolean;
  walletAll: any
  walletBalance: any;
}
const initialState: State = {
  Coins: undefined,
  loading: false,
  walletAll: undefined,
  walletBalance: undefined
};

const Slice = createSlice({
  name: 'CoinReducer',
  initialState,
  reducers: {
    SET_CURRENCIES: (state, action: PayloadAction<State>) => {
      state.Coins = action.payload;
    },
    SET_WALLET_ALL: (state, action: PayloadAction<State>) => {
      state.walletAll = action.payload.walletAll;
    },
    SET_WALLET_BALANCE: (state, action: PayloadAction<State>) => {
      state.walletBalance = action.payload;
    },
  },
});

export const { SET_CURRENCIES, SET_WALLET_ALL, SET_WALLET_BALANCE } = Slice.actions;
const CoinReducer = Slice.reducer;
export default CoinReducer;
