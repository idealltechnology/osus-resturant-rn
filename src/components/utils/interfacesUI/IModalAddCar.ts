import { ViewProps, ViewStyle } from "react-native";
import { IEvent } from "./IEvent";
import { IForm } from "./IForm";
import { IHeader } from "./IHeader";
import { IStyle } from "./IStyle";

export interface IModal extends IStyle<ViewStyle> {
    form: IForm;
    events?: IEvent;
    fullScreen?: boolean;
    backDropClose?: boolean;
    _iHeader?: IHeader;

}