import React, { useImperativeHandle, useRef } from 'react';
import { FlatList, ListRenderItem, StyleSheet, TouchableOpacity, View } from 'react-native';
import isTablet from '../../../../../../../../../../utilities/isTablet';
import CommonStyles from './../../../../../../../../../../configs/CommonStyles';
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
    <View style={[isTablet() && CommonStyles.card, defStyle.main]}>
      {isTablet() && <Header />}
      <FlatList data={[im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im2]} renderItem={renderItem} />
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: {
    flex: 1,
    borderRadius: 0, //rewriting card radius
  },
});
