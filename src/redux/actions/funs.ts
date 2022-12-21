import { DefaultCurrency, SET_APP_MODE, SET_CHECK_PIN_CODE, SET_DEFAULT_CURRENCY, SET_TRY_EXCHAGE_RATE, USE_REFERRAL_CODE } from "../slice/userSlice";
import { SET_USER_INFO, SET_LOGGED_IN, SET_TOKEN_TEMP, SET_COIN, SET_USER_ACTION, SET_CHECK_TRANSACTION } from "../slice/homeSlice";
import { SET_COIN_INFO, SET_HISTORY, SET_OPEN_ORDER, SET_ORDER_BOOK } from "../slice/AdvanceTrade";
import { SET_ALL_TRANSACTIONS, SET_CARD, SET_WALLET_HISTORY } from "../slice/Transaction";
import { SET_CURRENCIES, SET_WALLET_ALL, SET_WALLET_BALANCE } from "../slice/Coin";
import { SET_GLOBAL_LIST } from "../slice/globalListSlice";
import { SET_TOKEN } from "../slice/tokenSlice"
import { appDispatch } from "../store"


export const setToken = (data: { accessToken: string, refreshToken: string }) => {
    appDispatch(SET_TOKEN({ Token: data }));
}

export const setTryExchangeRate = (data: string) => {
    appDispatch(SET_TRY_EXCHAGE_RATE(data));
}

export const setLoggedIn = (value: boolean) => {
    appDispatch(SET_LOGGED_IN(value))
}

export const setCheckPinCode = (value: any) => {
    appDispatch(SET_CHECK_PIN_CODE(value))
}

export const useReferralCode = (value: any) => {
    appDispatch(USE_REFERRAL_CODE(value))
}

export const setTokenTemp = (value: any) => {
    appDispatch(SET_TOKEN_TEMP(value))
}

export const setUserInfo = (value: any) => {
    appDispatch(SET_USER_INFO(value))
}

export const setCoin = (value: any) => {
    appDispatch(SET_COIN(value))
}

export const setUserAction = (value: any) => {
    appDispatch(SET_USER_ACTION(value))
}

export const setCard = (value: any) => {
    appDispatch(SET_CARD(value))
}

export const setWalletHistory = (value: any) => {
    appDispatch(SET_WALLET_HISTORY(value))
}

export const setAllTransactions = (value: any) => {
    appDispatch(SET_ALL_TRANSACTIONS(value))
}

export const setHistory = (value: any) => {
    appDispatch(SET_HISTORY(value))
}

export const setCoinInfo = (value: any) => {
    appDispatch(SET_COIN_INFO(value))
}

export const setOrderBook = (value: any) => {
    appDispatch(SET_ORDER_BOOK(value))
}

export const setOpenOrder = (value: any) => {
    appDispatch(SET_OPEN_ORDER(value))
}

export const setCurrencies = (value: any) => {
    appDispatch(SET_CURRENCIES(value))
}

export const setWalletAll = (value: {
    balance: number,
    balanceWithoutOrder: number,
    currency: string,
    fiat: boolean,
    fullName: string,
    image: string,
    orders: []
}[]) => {
    appDispatch(SET_WALLET_ALL({ walletAll: value }))
}

export const setWalletBalance = (value: any) => {
    appDispatch(SET_WALLET_BALANCE(value))
}

export const setGlobalList = (value: any) => {
    appDispatch(SET_GLOBAL_LIST(value))
}
export const setCheckTransaction = (value: any) => {
    appDispatch(SET_CHECK_TRANSACTION(value))
}

export const setDefaultCurrency = (value: DefaultCurrency) => {
    appDispatch(SET_DEFAULT_CURRENCY(value))
}

export const setAppMode = (value: any) => {
    appDispatch(SET_APP_MODE(value))
    console.log('valuee', value);

};
