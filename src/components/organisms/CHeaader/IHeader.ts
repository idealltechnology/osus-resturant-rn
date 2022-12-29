import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface IHeader {
  navigation: NavigationProp<ParamListBase, string, string | undefined, any, any, any>;
  noTitle?: boolean;
}
