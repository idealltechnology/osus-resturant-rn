import React, { useImperativeHandle } from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { CText } from '../../../../../../../../../../../../components/atoms/Ctext/index';
import { Model } from '../Model';

export default React.forwardRef(({ address, name, phone }: Model, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <CText text={name} style={defStyle.txt} />
      <CText text={phone} style={defStyle.txt} />
      <CText text={address} style={defStyle.txt} />
    </View>
  );
});
const defStyle = StyleSheet.create({
  main: { flexDirection: 'row' },
  txt: { flex: 1, textAlign: 'left' },
  item: {
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(2),
  },
  itemView: { flex: 1 },
});
