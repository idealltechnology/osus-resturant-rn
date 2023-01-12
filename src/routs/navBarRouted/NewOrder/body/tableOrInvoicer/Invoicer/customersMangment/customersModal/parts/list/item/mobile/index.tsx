import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import CIconGenerator from '../../../../../../../../../../../../components/atoms/CIconGenerator/inedx';
import styleValues from '../../../../../../../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../../../../../../../components/utils/svgs/Xml';
import { labels } from '../../../../../../../../../../../../translation/lang/basics/ILangValuesEnum';
import CommonStyles from './../../../../../../../../../../../../configs/CommonStyles';
import mt from './../../../../../../../../../../../../translation/lang/basics/ILangValuesEnum';
import { Model } from './../Model';
import ItemCore from './ItemCore';

export default React.forwardRef(({ address, name, phone }: Model, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={[CommonStyles.card, defStyle.main]}>
      <CIconGenerator iconName={Xml.delete} style={{ alignSelf: 'flex-end' }} />
      <View style={defStyle.itemCoreView}>
        <ItemCore lbl={mt(labels.Name)} value={name} />
        <ItemCore lbl={mt(labels.phone)} value={phone.toString()} />
        <ItemCore lbl={mt(labels.address)} value={address} />
      </View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: { marginVertical: styleValues.paddin02, padding: styleValues.paddin03 },
  itemCoreView: { flex: 10 },
  delView: {
    flex: 1,
  },
});
