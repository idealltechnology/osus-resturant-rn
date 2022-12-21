import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface State {
  cardInfo: any;
  loading: boolean;
  walletHistory: any;
  allTransactions: any;
}
const initialState: State = {
  cardInfo: undefined,
  loading: false,
  walletHistory: [],
  allTransactions: undefined
};

const Slice = createSlice({
  name: 'TransactionReducer',
  initialState,
  reducers: {
    SET_CARD: (state, action: PayloadAction<State>) => {
      state.cardInfo = action.payload;
    },
    SET_WALLET_HISTORY: (state, action: PayloadAction<State>) => {
      state.walletHistory = action.payload;
    },
    SET_ALL_TRANSACTIONS: (state, action: PayloadAction<State>) => {
      state.allTransactions = action.payload;
    },
  },
});

export const { SET_CARD, SET_WALLET_HISTORY, SET_ALL_TRANSACTIONS } =
  Slice.actions;
const TransactionReducer = Slice.reducer;
export default TransactionReducer;
