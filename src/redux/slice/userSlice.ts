import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId, thunkAPI) => {
//   const response = await userAPI.fetchById(userId);
//   return response.data;
// });

// Define a type for the slice state

export interface DefaultCurrency { name: string, symbol: string }
interface userState {
  name: String;
  id: String;
  token: String;
  balance: any;
  myAccountImage: any;
  useReferralCode: any;
  checkPinCode: any;
  checkDarkMode: any;
  cities: any,
  appMode: any;
  defaultCurrency: DefaultCurrency,
  tryExchangeRate: string
}

// Define the initial state using that type
const initialState: userState = {
  name: '',
  id: '',
  token: '',
  balance: 0,
  myAccountImage: null,
  useReferralCode: null,
  checkPinCode: true,
  checkDarkMode: false,
  cities: [],
  appMode: 'https://api2safe.xyz',
  defaultCurrency: { name: 'TRY', symbol: '₺' },
  tryExchangeRate: '1'
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    SET_CHECK_PIN_CODE: (state, action: PayloadAction<userState>) => {
      state.checkPinCode = action.payload;
    },
    SET_APP_MODE: (state, action: PayloadAction<userState>) => {
      state.appMode = action.payload;
    },
    SET_CHECK_DARK_MODE: (state, action: PayloadAction<userState>) => {
      state.checkDarkMode = action.payload;
    },
    USE_REFERRAL_CODE: (state, action: PayloadAction<userState>) => {
      state.useReferralCode = action.payload;
    },
    GET_CITIES: (state, action: PayloadAction<userState>) => {
      state.cities = action.payload;
    },
    SET_DEFAULT_CURRENCY: (state, action: PayloadAction<DefaultCurrency>) => {
      state.defaultCurrency = action.payload;
    },
    saveData: (state, action: PayloadAction<userState>) => {
      state = action.payload;
    },

    SET_TRY_EXCHAGE_RATE: (state, action: PayloadAction<string>) => {
      state.tryExchangeRate = action.payload;
    },
  },
});

export const { SET_TRY_EXCHAGE_RATE, SET_DEFAULT_CURRENCY, saveData, SET_CHECK_PIN_CODE, USE_REFERRAL_CODE, SET_CHECK_DARK_MODE, GET_CITIES, SET_APP_MODE } = userSlice.actions;

export const set_check_pin_code = (data: any) => {
  return async function (dispatch: (arg0: { type: any; payload: any }) => void) {
    dispatch(SET_CHECK_PIN_CODE(data));
  };
};

export const set_check_dark_mode = (data: any) => {
  return async function (dispatch: (arg0: { type: any; payload: any }) => void) {
    dispatch(SET_CHECK_DARK_MODE(data));
  };
};

const userReducer = userSlice.reducer;
export default userReducer;
