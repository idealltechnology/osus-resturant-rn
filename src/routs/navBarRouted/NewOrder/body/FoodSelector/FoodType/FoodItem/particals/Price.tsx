import { StyleSheet } from 'react-native';
import CText from '../../../../../../../../components/atoms/CText';
import { IText } from '../../../../../../../../components/utils/interfacesUI/IText';
import ColorSystem from '../../../../../../../../configs/color/ColorSystem';

export default ({ text, style }: IText) => {
  return <CText style={[style, defStyle.main]} text={text + ' SAR'} />;
};
const defStyle = StyleSheet.create({
  main: { color: ColorSystem.Error },
});
