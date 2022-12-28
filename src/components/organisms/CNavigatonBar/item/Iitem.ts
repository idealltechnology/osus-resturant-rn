import { IIconSvg } from '../../../utils/interfacesUI/IIconSvg';
import { IText } from '../../../utils/interfacesUI/IText';

export interface Iitem {
  iconName: (color: string) => string;
  drawerDown?: boolean;
  navTo: string;
}
