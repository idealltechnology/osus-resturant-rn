import { useNavigation } from '@react-navigation/native';
import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import Deliv from './Deliv';
import InDel from './ResOrDel';
import InRest from './InRest';
import BaseView from '../../../components/organisms/BaseView';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';

export default () => {
  const [isInrest, set_isInret] = useState(false);
  useEffect(() => {
    console.log(DeviceInfo.getDevice(), DeviceInfo.isTablet());
  }, [isInrest]);

  return (
    <BaseView header={{ navigation: useNavigation() }} style={defStyle.baseView}>
      <InDel press={set_isInret} />
      {isInrest ? <InRest /> : <Deliv />}
    </BaseView>
  );
};

const defStyle = StyleSheet.create({
  baseView: { marginHorizontal: 0 },
});
