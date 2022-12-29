import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import mt, { labels } from '../../../../../translation/lang/basics/ILangValuesEnum';
import CText from '../../../../atoms/CText';

export default ({ name }: { name: string }) => {
  return (
    <View style={defStyle.conainer}>
      <CText text={`${mt(labels.Hello)} `} />
      <CText text={`${name}`} style={defStyle.text} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  conainer: { flexDirection: 'row' },
  text: { textAlign: 'center', fontWeight: 'bold' },
});
