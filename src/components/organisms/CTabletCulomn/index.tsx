import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ITabletCulomn } from './ITabletCulomn';
export default ({ start, end }: ITabletCulomn) => {
  return (
    <View style={[defStyle.baseView]}>
      <View style={defStyle.part}>{start}</View>
      <View style={defStyle.gap} />
      <View style={defStyle.part}>{end}</View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'row' },
  part: { flex: 10 },
  gap: { flex: 0.5 },
});
