import React, { useImperativeHandle } from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { CText } from '../../../../../../../../../../../../components/atoms/Ctext/index';
import { Model } from '../Model';
import { IText } from './../../../../../../../../../../../../components/atoms/Ctext/IText';

export default React.forwardRef(({ lbl, value }: { lbl: string; value: string }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <CText text={lbl} style={defStyle.txt} />
      <CText text={value} style={defStyle.txt} />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: { flexDirection: 'row' },
  txt: { flex: 1, textAlign: 'left' },
});
