import { ViewStyle } from 'react-native';
import { IStyle } from './IStyle';
import { IIconSvg } from './IIconSvg';
import { IText } from './IText';
import { IButtonContainer } from './IButtonContainer';

export interface IButton extends IStyle<ViewStyle> {
  isDisabled?: boolean;
  iText: IText;
  iIconSvg?: IIconSvg;
  iButtonContainer: IButtonContainer;
}
