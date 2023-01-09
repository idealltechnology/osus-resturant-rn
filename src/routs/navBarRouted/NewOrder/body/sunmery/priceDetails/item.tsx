import { StyleSheet, View } from 'react-native';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import CGrayLabel from '../..//../../../../components/atoms/CGrayLabel';
import { CText } from './../../../../../../components/atoms/Ctext/index';
export default ({ name, value, bold }: { name: string; value: string; bold?: boolean }) => {
  return (
    <View style={defStyle.main}>
      <CText style={[defStyle.inCommen, defStyle.txt, bold && { fontWeight: 'bold' }]} text={name} />
      <CGrayLabel style={[defStyle.inCommen, defStyle.lbl]} text={value} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: 'row', marginVertical: styleValues.paddin02 },
  inCommen: {
    fontSize: EnumFontSize.h5,
  },
  txt: { flex: 2, textAlign: 'justify' },
  lbl: { flex: 1 },
});
