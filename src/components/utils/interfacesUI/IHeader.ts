import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ScreenProps } from 'react-native-screens';

export interface IHeader {
  navigation: NavigationProp<ParamListBase, string, string | undefined, any, any, any>;
  noTitle?: boolean;
}
