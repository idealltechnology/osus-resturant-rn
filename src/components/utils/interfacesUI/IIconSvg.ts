import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IStyle } from './IStyle';

export interface IIconSvg extends IStyle<ViewStyle> {
  event?: IEvent;
  size?: number | string;
  iconName: (color: string) => string;
  position?: 'start' | 'end';
  color?: string;
}
