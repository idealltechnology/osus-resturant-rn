import { View, StyleSheet } from 'react-native';
import { ISimpleTab } from '../ISimpleTab';

export default ({ list, selected }: { list: ISimpleTab[]; selected: number }) => {
  // mrvTxtTest.alertObj(selected);
  return (
    <View style={defStyle.main}>
      {list.map((item, index) => (
        <View style={{ display: list[index] === list[selected] ? 'flex' : 'none' }}>{item.item}</View>
      ))}
    </View>
  );
};
const defStyle = StyleSheet.create({
  main: { flex: 1 },
  item: {},
});
