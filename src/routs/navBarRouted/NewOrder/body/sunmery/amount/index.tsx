import { I18nManager, StyleSheet, TextInput, View } from 'react-native';
import CText from '../../../../../../components/atoms/Ctext';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import ColorSystem from './../../../../../../configs/color/ColorSystem';
export default ({ Amount }: { Amount: string | number }) => {
  return (
    <View>
      <CText text={'Amount'} style={defStyle.title} />
      <View style={defStyle.row}>
        <TextInput editable={false} value={Amount.toString()} style={[!I18nManager.isRTL ? defStyle.startRadius : defStyle.endRadius, defStyle.txtInp]} />
        <CText text={'Add'} style={[I18nManager.isRTL ? defStyle.startRadius : defStyle.endRadius, , defStyle.txt]} />
      </View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
  row: { flexDirection: 'row' },
  title: { textAlign: 'justify', fontSize: EnumFontSize.h4 },
  txtInp: {
    flex: 10,
    borderWidth: 1,
    borderColor: ColorSystem.gray!(10),
  },
  txt: {
    flex: 2.5,
    backgroundColor: ColorSystem.BrandColor,
    color: ColorSystem.White,
  },
  startRadius: {
    borderBottomLeftRadius: styleValues.radius10,
    borderTopLeftRadius: styleValues.radius10,
  },
  endRadius: {
    borderTopRightRadius: styleValues.radius10,
    borderBottomRightRadius: styleValues.radius10,
  },
});
