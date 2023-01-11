import { mode } from 'native-base/lib/typescript/theme/tools';
import React, { useImperativeHandle, useRef } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity, View, StyleSheet } from 'react-native';
import CIconGenerator from '../../../../../../../../../../components/atoms/CIconGenerator/inedx';
import Xml from '../../../../../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../../../../utilities/isTablet';
import Header from './Header';
import Item from './item';
import { Model } from './item/Model';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return {};
  });

  const renderItem: ListRenderItem<Model> = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <Item model={item} />
      </TouchableOpacity>
    );
  };
  const im: Model = { address: 'sari', name: 'albert einstain', phone: '+989119503191' };
  const im2: Model = { address: 'last', name: 'albert einstain', phone: '091919012' };
  return (
    <View style={defStyle.main}>
      {isTablet() && <Header />}
      <FlatList data={[im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im2]} renderItem={renderItem} />
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: ColorSystem.gray!(5),
    flex: 1,
  },
});
