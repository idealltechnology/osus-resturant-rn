import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IEvent } from "./IEvent";
import { IStyle } from "./IStyle";
import { IText } from "./IText";

export default interface IDropdown extends IStyle<ViewStyle> {
    title?: IText;
    event?: IEvent;
    makeSelection?: IText;
    data: {
        listPropName?: string[] | string;
        list: any[]
    };

    search?: boolean;
    defaultButtonText?: string;
    allStyles?: {
        buttonStyle?: StyleProp<ViewStyle>;
        buttonTextStyle?: StyleProp<TextStyle>;
        rowStyle?: StyleProp<ViewStyle>;
        rowTextStyle?: StyleProp<TextStyle>;
        dropdownStyle?: StyleProp<ViewStyle>;
        selectedRowStyle?: StyleProp<ViewStyle>;
        searchInputStyle?: StyleProp<ViewStyle>;
        selectedRowTextStyle?: StyleProp<TextStyle>;
    }

}