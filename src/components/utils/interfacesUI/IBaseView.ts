import { Node } from '@babel/core';
import { StyleProp, ViewStyle } from 'react-native';

export interface IBaseView {
  nav: any;
  style?: StyleProp<ViewStyle>;
  children: Node[] | Node;
  // _iHeader?: IHeader | null;
  _IFooter?: boolean;
}
