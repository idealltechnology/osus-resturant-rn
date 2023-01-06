import { View, StyleSheet } from 'react-native';
import Head from './head';
export default () => {
  return (
    <View style={defStyle.main}>
      <Head num="3" typ="First Floor" />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
});
