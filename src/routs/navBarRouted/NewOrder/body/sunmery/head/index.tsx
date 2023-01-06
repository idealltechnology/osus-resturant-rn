import { StyleSheet, View } from 'react-native';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import Item from './item';
export default ({ num, typ }: { num: string; typ: string }) => {
  return (
    <View style={defStyle.main}>
      <Item name={mt(labels.tableNumber)} value={num} />
      <Item name={mt(labels.typeTable)} value={typ} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: 'row' },
});
