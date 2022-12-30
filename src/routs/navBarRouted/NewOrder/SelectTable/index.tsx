import React from 'react';
import { StyleSheet, View } from 'react-native';
import Floors from './Floors';
import Tables from './Tables';

export default () => {
  return (
    <View style={[defStyle.baseView]}>
      <Floors select={(item) => {}} />
      <Tables select={(item) => {}} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flex: 1 },
});
