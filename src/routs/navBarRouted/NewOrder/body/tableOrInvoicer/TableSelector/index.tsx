import { StyleSheet, View } from 'react-native';
import Floors from './Floors';
import Tables from './Tables';

export default () => {
  return (
    <View style={defStyle.main}>
      <Floors select={(item) => {}} />
      <Tables select={(item) => {}} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flex: 1 },
});
