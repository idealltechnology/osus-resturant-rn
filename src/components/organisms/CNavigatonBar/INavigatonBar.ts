import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface INavigatonBar {
  navigation: NavigationProp<ParamListBase, string, string | undefined, any, any, any>;
}
