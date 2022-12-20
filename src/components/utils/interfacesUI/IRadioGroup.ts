import { IStyle } from './IStyle';
import { StyleProp, ViewStyle } from "react-native";
import { IEvent } from './IEvent';
import { IRadio } from './IRadio';
import { IText } from './IText';
import { IICon } from './IICon';

export interface IRadioGroup extends IStyle<ViewStyle> {
    event: IEvent;
    ListRadio: IRadio[];
    requierd?: boolean;
    size?: number | string;
    title?: IText;
    name: string;
    defaultValue?: number | string,
    icon?: IICon;
    horizental?: boolean;


}
