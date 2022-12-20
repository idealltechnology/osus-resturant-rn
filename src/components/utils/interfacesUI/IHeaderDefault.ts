import { ViewStyle } from 'react-native';
import { IEvent } from './IEvent';
import { IICon } from './IICon';
import { IStyle } from './IStyle';
import { IText } from './IText';

export interface IHeaderDefault extends IStyle<ViewStyle> {
  title?: IText;
  showIconMenu?: boolean;
  iconEnd?: IICon;
  iconEndEvent?: IEvent;
}
