import { ToastAndroid } from "react-native";

const Toast = (s: string | number) => {
    ToastAndroid.show(s + '', ToastAndroid.SHORT);

}
export default Toast