import { StyleSheet } from 'react-native';
import CText from '../../../../../../../../components/atoms/Ctext';
import { IText } from '../../../../../../../../components/atoms/Ctext/IText';
import ColorSystem from '../../../../../../../../configs/color/ColorSystem';

export default ({ text, style }: IText) => {
  return <CText style={[style, defStyle.main]} text={text + ' SAR'} />;
};
const defStyle = StyleSheet.create({
  main: { color: ColorSystem.Error },
});
