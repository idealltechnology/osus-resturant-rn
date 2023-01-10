import { useState, useRef } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View, I18nManager } from 'react-native';
import { CIconGenerator } from './../../../../../../components/atoms/CIconGenerator/inedx';
import Xml from './../../../../../../components/utils/svgs/Xml';

export default ({}: {}) => {
  const adfMoalRef = useRef<any>();

  return (
    <View style={defStyle.main}>
      <CIconGenerator iconName={Xml.first} />
      <CIconGenerator iconName={Xml.previous} />
      <CIconGenerator iconName={Xml.next} />
      <CIconGenerator iconName={Xml.last} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
});
