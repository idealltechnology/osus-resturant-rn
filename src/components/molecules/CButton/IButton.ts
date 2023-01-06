import { ViewStyle } from 'react-native';
import { IStyle } from '../../utils/interfacesUI/IStyle';
import { IIconSvg } from '../../utils/interfacesUI/IIconSvg';
import { IText } from '../../atoms/Ctext/IText';
import { IButtonContainer } from '../../utils/interfacesUI/IButtonContainer';

export interface IButton extends IStyle<ViewStyle> {
  isDisabled?: boolean;
  iText: IText;
  iIconSvg?: IIconSvg;
  iButtonContainer: IButtonContainer;
}
