import { ViewStyle } from 'react-native';
import { IIconSvg } from '../../utils/interfacesUI/IIconSvg';
import { IInput } from './IInput';
import { IStyle } from '../../utils/interfacesUI/IStyle';
import { IText } from '../../atoms/Ctext/IText';
import { ITextStared } from './../../atoms/CTextStared/ITextStared';

export type IInputTextFunction = {
  _onError: (e: string) => void;
};

export interface IObject {
  [key: string]: any;
}
export interface IInputText extends IStyle<ViewStyle> {
  title?: ITextStared;
  input: IInput;
  placeHolder?: IText;
  startIcon?: IIconSvg;
  endIcon?: IIconSvg;
}
