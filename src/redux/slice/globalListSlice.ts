import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface globalListState {
  coins: any;
}
const initialState: globalListState = {
  coins: [],
};

const globalListSlice = createSlice({
  name: 'globalListReducer',
  initialState,
  reducers: {
    SET_GLOBAL_LIST: (state, action: PayloadAction<globalListState>) => {
      state.coins = action.payload;
    },
  },
});

export const { SET_GLOBAL_LIST } = globalListSlice.actions;

export const set_global_list = (data: any) => {
  return async function (dispatch: (arg0: { type: any; payload: any }) => void) {
    dispatch(SET_GLOBAL_LIST(data));
  };
};

const globalListReducer = globalListSlice.reducer;
export default globalListReducer;
