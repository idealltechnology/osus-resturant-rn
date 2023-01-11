import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSystem from '../../../../../../../../../../configs/color/ColorSystem';
import Item from './item';
import Tablet from './item/tablet';

export default React.forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <Tablet model={{ address: 'address', name: 'name', phone: 'phone' }} noDel />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: { backgroundColor: ColorSystem.gray!(5) },
});
