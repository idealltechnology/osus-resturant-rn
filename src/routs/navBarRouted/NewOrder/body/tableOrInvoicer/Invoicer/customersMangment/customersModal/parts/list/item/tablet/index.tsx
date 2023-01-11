import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import CIconGenerator from '../../../../../../../../../../../../components/atoms/CIconGenerator/inedx';
import styleValues from '../../../../../../../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../../../../../../../configs/color/ColorSystem';
import ItemCore from './ItemCore';
import { Model } from './../Model';

export default React.forwardRef(({ model, noDel }: { noDel?: boolean; model: Model }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <View style={defStyle.itemCoreView}>
        <ItemCore {...model} />
      </View>
      <View style={defStyle.delView}>{!noDel && <CIconGenerator iconName={Xml.delete} />}</View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: { marginVertical: styleValues.paddin02, flexDirection: 'row' },
  itemCoreView: { flex: 10 },
  delView: {
    flex: 1,
  },
});
