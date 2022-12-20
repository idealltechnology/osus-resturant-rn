import { ViewStyle } from 'react-native';
import { IIconSvg } from './IIconSvg';
import { IInput } from './IInput';
import { IStyle } from './IStyle';
import { IText } from './IText';

export type IInputTextFunction = {
  _onError: (e: string) => void;
};

export interface IObject {
  [key: string]: any;
}
export interface IInputText extends IStyle<ViewStyle> {
  requier?: true;
  title?: IText;
  input: IInput;
  placeHolder?: IText;
  startIcon?: IIconSvg;
  endIcon?: IIconSvg;
}
