import { StyleSheet } from 'react-native';
import styleValues from '../components/utils/enums/styleValues';
import ColorSystem from './color/ColorSystem';

const CommonStyles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: ColorSystem.gray!(20),
    borderRadius: styleValues.radius10,
  },
});
export default CommonStyles;
export const borderColor = ColorSystem.gray!(20);
