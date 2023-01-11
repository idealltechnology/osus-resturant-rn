import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CModal from '../../../../../../../../components/organisms/CModal';
import Pager from '../../../../../../../../components/organisms/pager';
import styleValues from '../../../../../../../../components/utils/enums/styleValues';
import Header from './parts/Header';
import List from './parts/list';
// import Header from './header';

export default React.forwardRef(({}, ref) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={defStyle.main}>
        <List />
      </View>
      <Pager page={2} pages={5} />
    </View>
  );
});

const defStyle = StyleSheet.create({
  modal: {
    borderRadius: styleValues.paddin03,
    marginVertical: styleValues.paddin05,
    padding: styleValues.paddin02,
  },
  main: {
    padding: styleValues.paddin01,
    flex: 1,
    // borderWidth: 1,
  },
  head: {
    flexDirection: 'row',
  },
  btn: { flex: 2, marginHorizontal: styleValues.paddin01 },
  title: { flex: 3, textAlign: 'left' },
});
