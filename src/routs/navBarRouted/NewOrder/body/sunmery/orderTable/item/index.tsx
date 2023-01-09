import { StyleSheet, View } from 'react-native';
import { EnumFontSize } from '../../../../../../../components/utils/enums/EnumFontSize';
import CGrayLabel from '../../../../../../../components/atoms/CGrayLabel';
import { CText } from '../../../../../../../components/atoms/Ctext/index';
import { Model } from './Model';
export default ({ action, discount, price, productName, quantity, total }: Model) => {
  return (
    <View style={defStyle.main}>
      <CText style={defStyle.txt} text={productName} />
      <CGrayLabel style={defStyle.txt} text={quantity} />
      <CGrayLabel style={defStyle.txt} text={price} />
      <CGrayLabel style={defStyle.txt} text={discount} />
      <CText style={defStyle.txt} text={total.toString()} />
      <CText style={defStyle.txt} text={action} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: 'row', flex: 1 },
  txt: { flex: 1, fontSize: EnumFontSize.h6 },
});
