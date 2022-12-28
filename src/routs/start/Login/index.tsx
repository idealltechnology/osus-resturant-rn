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
import styleValues from '../../../components/utils/enums/styleValues';
import LangChanger from '../../../components/organisms/langChanger';
import isTablet from '../../../utilities/isTablet';
import testStyles from '../../../components/utils/enums/testStyles';

//#endregion

export default ({ navigation }: IloginProps) => {
  // TODO
  useEffect(() => {
    // navigation.replace(RoutsEnum.NewOrder);

    return () => {
      //destroy
    };
  }, []);

  return (
    <BaseView style={{}}>
      <View style={[{ flex: 1 }]}>
        <CLogo size={8} style={[{ flex: 1 }]} />
        <View style={{ flex: 7 }}>
          <ScrollView>
            <View style={[defStyl.mainSubView]}>
              <Hello />
              <Form />
            </View>
          </ScrollView>
        </View>
      </View>
    </BaseView>
  );
};

const defStyl = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
  },
  mainSubView: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: ColorSystem.White,
    padding: styleValues.paddin03,
    borderRadius: styleValues.radius15,
  },
  tablet: {},
  mobole: {},
});
