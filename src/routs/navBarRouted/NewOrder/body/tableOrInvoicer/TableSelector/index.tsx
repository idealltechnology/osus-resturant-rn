import { StyleSheet, View } from 'react-native';
import Floors from './Floors';
import Tables from './Tables';
import { Model } from './Tables/item/Model';

export default ({ select }: { select: (item: Model) => void }) => {
  return (
    <View style={defStyle.main}>
      <Floors select={(item) => {}} />
      <Tables
        select={(item) => {
          select(item);
        }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flex: 1 },
});
