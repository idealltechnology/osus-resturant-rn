import { Node } from '@babel/core';
import { StyleProp, ViewStyle } from 'react-native';
import { IHeader } from './IHeader';

export interface IBaseView {
  style?: StyleProp<ViewStyle>;
  children: Node[] | Node;
  header?: IHeader;
  _IFooter?: boolean;
}
