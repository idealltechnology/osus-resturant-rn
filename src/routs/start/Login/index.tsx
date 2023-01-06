//#region ... imports
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IloginProps } from './IloginProps';
import BaseView from '../../../components/organisms/BaseView';
import ColorSystem from '../../../configs/color/ColorSystem';
import { RoutsEnum } from '../../../navigation/router/RoutsEnum';
import CLogo from '../../../components/atoms/CLogo/CLogo';
import Hello from './parts/Hello';
import Form from './parts/Form';
import styleValues from '../../../components/utils/enums/styleValues';
import LangChanger from '../../../components/organisms/langChanger';
import isTablet from '../../../utilities/isTablet';

//#endregion

export default ({ navigation }: IloginProps) => {
  // TODO
  useEffect(() => {
    navigation.replace(RoutsEnum.NewOrder);

    return () => {
      //destroy
    };
  }, []);

  return (
    <BaseView>
      <View style={defStyl.header}>
        <CLogo size={8} />
        <LangChanger />
      </View>

      <View style={defStyl.formContainer}>
        <View style={defStyl.ScrollOverView}>
          <ScrollView contentContainerStyle={[defStyl.mainSubView]}>
            <Hello />
            <Form />
          </ScrollView>
        </View>
      </View>
    </BaseView>
  );
};

const defStyl = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  formContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
  },
  ScrollOverView: { height: isTablet() ? wp(40) : hp(53) },
  mainSubView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    backgroundColor: ColorSystem.White,
    padding: styleValues.paddin03,
    borderRadius: styleValues.radius15,
  },
  tablet: {},
  mobole: {},
});
