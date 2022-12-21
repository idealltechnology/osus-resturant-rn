import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface tokenState {
  Token: {
    accessToken:string,
    refreshToken:string
  };
}
const initialState: tokenState = {
  Token: {
    accessToken:'',
    refreshToken:''
  },
};

const homeSlice = createSlice({
  name: 'tokenReducer',
  initialState,

  reducers: {
    SET_TOKEN: (state, action: PayloadAction<tokenState>) => {
      state.Token = action.payload.Token;
    },
  },
});

export const { SET_TOKEN, } = homeSlice.actions;
const homeReducer = homeSlice.reducer;
export default homeReducer;
