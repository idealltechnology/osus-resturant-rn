import React, { useEffect, FC, useState, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import styleValues from '../../../../components/utils/enums/styleValues';
import Floors from './Floors';
import Tables from './Tables';

export default () => {
  return (
    <View style={defStyle.baseView}>
      <Floors select={(item) => {}} />
      <Tables select={(item) => {}} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'column' },
});
