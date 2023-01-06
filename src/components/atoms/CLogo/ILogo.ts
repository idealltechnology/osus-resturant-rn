import { IStyle } from '../../utils/interfacesUI/IStyle';
import { StyleProp, ViewStyle } from 'react-native';

export interface ILogo extends IStyle<ViewStyle> {
  horizontal?: boolean;
  size?: number | string;
}
