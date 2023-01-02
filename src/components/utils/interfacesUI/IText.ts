import { IStyle } from './IStyle';
import { TextStyle } from 'react-native';
import { IEvent } from './IEvent';

export interface IText extends IStyle<TextStyle> {
  events?: IEvent;
  text?: string | number;
  bold?: boolean;
  disabled?: boolean;
}
