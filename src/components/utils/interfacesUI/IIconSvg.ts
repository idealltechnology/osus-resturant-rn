import { ViewStyle } from 'react-native';
import { IStyle } from './IStyle';

export interface IIconSvg extends IStyle<ViewStyle> {
  size?: number | string;
  iconName: (color: string) => string;
  position?: 'start' | 'end';
  color?: string;
}
