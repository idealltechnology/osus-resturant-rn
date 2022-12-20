import { IStyle } from "./IStyle";
import { StyleProp, TextStyle } from "react-native";
import { Node } from "@babel/core";
import { LayoutChangeEvent } from "react-native";
import { IEvent } from "./IEvent";
import { IText } from "./IText";


export interface ITextStared extends IText {
    isNotRquierd?: boolean
} 