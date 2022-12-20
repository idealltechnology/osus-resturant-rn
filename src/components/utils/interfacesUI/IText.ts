import { IStyle } from "./IStyle";
import { StyleProp, TextStyle } from "react-native";
import { Node } from "@babel/core";
import { LayoutChangeEvent } from "react-native";
import { IEvent } from "./IEvent";


export interface IText extends IStyle<TextStyle> {
    events?: IEvent;
    text?: string;
    color?: string;
    bold?: boolean;
    disabled?: boolean;
} 