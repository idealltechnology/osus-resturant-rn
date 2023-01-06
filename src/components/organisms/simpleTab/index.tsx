import React, { useState, useImperativeHandle } from 'react';
import { View, StyleSheet } from 'react-native';
import { ISimpleTab } from './ISimpleTab';
import TabNames from './tabNames';
import Tabs from './tabs';

export default React.forwardRef(({ list }: { list: ISimpleTab[] }, ref) => {
  useImperativeHandle(ref, () => {
    return { movForward };
  });
  const [selectedIndex, setSelectedIndex] = useState(2);
  const movForward = () => {
    // mrvTxtTest.TSTtoast('movForward');
    var next = selectedIndex + 1;
    next < list.length && setSelectedIndex(selectedIndex + 1);
  };
  return (
    <View style={defStyle.main}>
      <TabNames
        list={list}
        selectedIndex={selectedIndex}
        select={(i) => {
          setSelectedIndex(i);
        }}
      />
      <Tabs list={list} selected={selectedIndex} />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
});
