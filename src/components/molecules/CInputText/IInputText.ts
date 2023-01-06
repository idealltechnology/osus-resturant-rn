import { ViewStyle } from 'react-native';
import { IIconSvg } from '../../utils/interfacesUI/IIconSvg';
import { IInput } from './IInput';
import { IStyle } from '../../utils/interfacesUI/IStyle';
import { IText } from '../../atoms/Ctext/IText';

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
