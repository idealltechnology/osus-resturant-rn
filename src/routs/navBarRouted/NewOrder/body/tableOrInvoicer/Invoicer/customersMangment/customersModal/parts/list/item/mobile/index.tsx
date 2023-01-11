import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import CIconGenerator from '../../../../../../../../../../../../components/atoms/CIconGenerator/inedx';
import styleValues from '../../../../../../../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../../../../../../../components/utils/svgs/Xml';
import { Model } from './../Model';
import ItemCore from './ItemCore';

export default React.forwardRef(({ address, name, phone }: Model, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <CIconGenerator iconName={Xml.delete} />
      <View style={defStyle.itemCoreView}>
        <ItemCore lbl="name" value={name} />
        <ItemCore lbl="phone" value={phone.toString()} />
        <ItemCore lbl="address" value={address} />
      </View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: { marginVertical: styleValues.paddin02 },
  itemCoreView: { flex: 10 },
  delView: {
    flex: 1,
  },
});
