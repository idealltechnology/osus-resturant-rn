import { IStyle } from '../../utils/interfacesUI/IStyle';
import { TextStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';

export interface IText extends IStyle<TextStyle> {
  events?: IEvent;
  text?: string | number;
  bold?: boolean;
  disabled?: boolean;
}
