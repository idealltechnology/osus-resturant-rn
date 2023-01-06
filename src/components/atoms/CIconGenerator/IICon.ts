import { IStyle } from '../../utils/interfacesUI/IStyle';
import { ViewStyle } from 'react-native';
import { IEvent } from '../../utils/interfacesUI/IEvent';

export interface IICon extends IStyle<ViewStyle> {
  events?: IEvent;
  size?: number | string;
  iconName: string;
}
