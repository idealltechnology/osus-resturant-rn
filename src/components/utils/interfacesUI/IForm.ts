import { ViewProps, ViewStyle } from "react-native";
import { IStyle } from "./IStyle";

export interface IForm extends IStyle<ViewStyle> {
    widgets: any[];

}