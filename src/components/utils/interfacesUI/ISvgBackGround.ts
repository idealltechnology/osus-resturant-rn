import { ViewStyle } from "react-native";
import { IICon } from "./IICon";
import { IStyle } from "./IStyle";

export interface ISvgBackGround extends IStyle<ViewStyle> {
    children: any;
    svg: IICon;

}