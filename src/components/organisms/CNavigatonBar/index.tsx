import React, { useImperativeHandle, FC, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { IHeader } from '../CHeaader/IHeader';
import { Iitem } from './item/Iitem';
import list from './list';
import Item from './item';
import styleValues from '../../utils/enums/styleValues';

export default React.forwardRef(({ navigation }: IHeader, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  const routName = () => {
    let state = navigation.getState();
    let index = state.index;
    let routs = state.routes;

    return routs[index].name;
  };

  const item = (item: Iitem) => {
    return <Item item={item} current={routName()} navigation={navigation} />;
  };

  return (
    <View style={defStyle.conttainer}>
      {list.map((i, index) => (
        <Fragment key={index}>{item(i)}</Fragment>
      ))}
    </View>
  );
});

const defStyle = StyleSheet.create({
  conttainer: { flexDirection: 'row', height: '100%', width: '100%' },
  item: { flex: 1, fontSize: styleValues },
});
