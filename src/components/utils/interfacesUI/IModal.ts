import { Node } from "@babel/core";
import { ViewProps, ViewStyle } from "react-native";
import { IEvent } from "./IEvent";
import { IForm } from "./IForm";
import { IHeader } from "./IHeader";
import { IStyle } from "./IStyle";

export interface IModal extends IStyle<ViewStyle> {
    form?: IForm;
    children?: Node;
    events?: IEvent;
    fullScreen?: boolean;
    backDropDontClose?: boolean;
    _iHeader?: IHeader;

}