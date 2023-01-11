import { KeyboardTypeOptions, TextStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';
import { IStyle } from '../../utils/interfacesUI/IStyle';

export interface IInput extends IStyle<TextStyle> {
  events?: IEvent;
  editable?: boolean;
  borderColor?: string;
  value?: string;
  placeHoldr?: { text: string; color?: string };
  keyboardType?: KeyboardTypeOptions | undefined | 'mobile' | 'pass';
  textAlign?: 'left' | 'center' | 'right' | undefined;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  variant?: 'outline' | 'underlined' | 'rounded' | 'filled' | 'unstyled';
  maxLength?: number;
}
