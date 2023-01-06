import { StyleSheet, View } from 'react-native';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import CGrayLabel from '../..//../../../../components/atoms/CGrayLabel';
import { CText } from './../../../../../../components/atoms/Ctext/index';
export default ({ name, value }: { name: string; value: string }) => {
  return (
    <View style={defStyle.main}>
      <CText style={defStyle.txt} text={name} />
      <CGrayLabel style={defStyle.txt} text={value} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: 'row', flex: 1 },
  txt: { flex: 1, fontSize: EnumFontSize.h6 },
});
