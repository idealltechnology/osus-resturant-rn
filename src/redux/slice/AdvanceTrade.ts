import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface homeState {
  CoinInfo: any;
  OrderBook: any;
  History: any;
  OpenOrder: any;
}
const initialState: homeState = {
  CoinInfo: undefined,
  OrderBook: undefined,
  History: undefined,
  OpenOrder: undefined,
};

const AdvanceTrade = createSlice({
  name: 'TradeReducer',
  initialState,
  reducers: {
    SET_COIN_INFO: (state, action: PayloadAction<homeState>) => {
      state.CoinInfo = action.payload;
    },
    SET_ORDER_BOOK: (state, action: PayloadAction<homeState>) => {
      state.OrderBook = action.payload;
    },
    SET_HISTORY: (state, action: PayloadAction<homeState>) => {
      state.History = action.payload;
    },
    SET_OPEN_ORDER: (state, action: PayloadAction<homeState>) => {
      state.OpenOrder = action.payload;
    },
  },
});

export const { SET_OPEN_ORDER, SET_COIN_INFO, SET_ORDER_BOOK, SET_HISTORY } =
  AdvanceTrade.actions;
const TradeReducer = AdvanceTrade.reducer;
export default TradeReducer;
