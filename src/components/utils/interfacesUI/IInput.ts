import { KeyboardTypeOptions, TextStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IStyle } from './IStyle';
import { IText } from './IText';

export interface IInput extends IStyle<TextStyle> {
  events?: IEvent;
  editable?: boolean;
  borderColor?: string;
  value?: string;
  placeHoldr?: { text: string; color?: string };
  keyboardType?: KeyboardTypeOptions | undefined | 'mobile';
  textAlign?: 'left' | 'center' | 'right' | undefined;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  variant?: 'outline' | 'underlined' | 'rounded' | 'filled' | 'unstyled';
  maxLength?: number;
}
