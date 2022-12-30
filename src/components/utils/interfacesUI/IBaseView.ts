import { Node } from '@babel/core';
import { StyleProp, ViewStyle } from 'react-native';
import { INavigatonBar } from '../../organisms/CNavigatonBar/INavigatonBar';
import { IHeader } from '../../organisms/CHeaader/IHeader';

export interface IBaseView {
  style?: StyleProp<ViewStyle>;
  children?: Node[] | Node;
  header?: IHeader;
  navBar?: INavigatonBar;
}
