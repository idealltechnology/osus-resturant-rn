import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ITabletCulomn } from './ITabletCulomn';
export default ({ start, end }: ITabletCulomn) => {
  return (
    <View style={[defStyle.baseView]}>
      <View style={defStyle.part}>
        <ScrollView>
          <>{start}</>
        </ScrollView>
      </View>
      <View style={defStyle.gap} />
      <View style={defStyle.part}>
        <ScrollView style={defStyle.part}>
          <>{end}</>
        </ScrollView>
      </View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'row' },
  part: { flex: 10 },
  gap: { flex: 0.5 },
});
