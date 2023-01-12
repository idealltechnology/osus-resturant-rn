import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorSystem from '../../../../../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../../../../../translation/lang/basics/ILangValuesEnum';
import Tablet from './item/tablet';

export default React.forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <Tablet model={{ address: mt(labels.address), name: mt(labels.Name), phone: mt(labels.phone) }} noDel />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: { backgroundColor: ColorSystem.gray!(5) },
});
