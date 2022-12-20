import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CInputText from '../../../../components/molecules/CInputText';
import Xml from '../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../configs/color/ColorSystem';
import FoodType from './FoodType';

export default () => {
  return (
    <View style={defStyle.inDelView}>
      <CInputText
        startIcon={{
          iconName: Xml.magnifier,
          color: ColorSystem.F_Gray!(20),
        }}
        input={{ placeHoldr: { text: 'search', color: ColorSystem.F_Gray!(20) } }}
        style={defStyle.input}
      />
      <FoodType
        select={(v) => {
          // mrvTxtTest.TSTtoast(v);
        }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { marginHorizontal: 0 },
  inDelView: { flexDirection: 'column' },
  input: {
    marginTop: heightPercentageToDP(3),
  },
});
