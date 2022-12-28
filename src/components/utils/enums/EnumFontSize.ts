import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import resizer from './resizer';
export enum EnumFontSize {
  h1 = resizer(wp(8.0)), //fontSize:18

  h2 = resizer(wp(6.0)), //fontSize:18

  h3 = resizer(wp(4.5)), //fontSize:16

  h4 = resizer(wp(4.0)), //fontSize:14

  h5 = resizer(wp(3.5)), //fontSize:12

  h6 = resizer(wp(3.0)), //fontSize:10

  h7 = resizer(wp(2.5)), //fontSize:10

  h8 = resizer(wp(2.0)), //fontSize:10
}
