//#region ... imports
import React, { useState, useEffect, FC, useRef } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IloginProps } from './IloginProps';
import BaseView from '../../../components/organisms/BaseView';
import CInputText from '../../../components/molecules/CInputText';
import ColorSystem from '../../../configs/color/ColorSystem';
import CButton from '../../../components/molecules/CButton';
import { RoutsEnum } from '../../../navigation/router/RoutsEnum';
import CLogo from '../../../components/atoms/CLogo';
import Hello from './parts/Hello';
import Form from './parts/Form';
import styleValues from '../../../components/utils/InterfaceStyles/styleValues';
import LangChanger from '../../../components/organisms/langChanger';

//#endregion

export default ({ navigation }: IloginProps) => {
  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <BaseView>
      <CLogo size={8} />
      <ScrollView>
        <View style={defStyyl.mainSubView}>
          <Hello />
          <Form />
          <LangChanger />
        </View>
      </ScrollView>
    </BaseView>
  );
};

const defStyyl = StyleSheet.create({
  mainSubView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: styleValues.paddin05,
    marginVertical: styleValues.paddin15,
    backgroundColor: ColorSystem.White,
    padding: styleValues.paddin03,
    borderRadius: styleValues.radius15,
  },
});
