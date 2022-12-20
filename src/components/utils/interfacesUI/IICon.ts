import { IStyle } from "./IStyle";
import { ViewStyle } from "react-native";
import { IEvent } from "./IEvent";

export interface IICon extends IStyle<ViewStyle> {
    events?: IEvent;
    size?: number | string;
    iconName: string;
}