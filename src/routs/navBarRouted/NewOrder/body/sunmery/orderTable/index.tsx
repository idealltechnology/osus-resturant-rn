import { StyleSheet, View } from 'react-native';
import Item from './item';
import Titles from './Titles';

export default ({ num, typ }: { num: string; typ: string }) => {
  return (
    <View>
      <Titles />
      <Item action="action" discount={4} price={120} productName="salad" quantity={13} total={1500} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  text: { margin: 6, justifyContent: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
});
