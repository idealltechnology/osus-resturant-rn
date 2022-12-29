import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Deliv from './Deliv';
import ResOrDel from './ResOrDel';
import InRest from './InRest';
import BaseView from '../../../components/organisms/BaseView';
import { View } from 'native-base';
import isTablet from '../../../utilities/isTablet';
import ResDelBar from './ResDelBar';

export default () => {
  const [isInrest, set_isInret] = useState(false);

  return (
    <BaseView header={{ navigation: useNavigation() }} navBar={{ navigation: useNavigation() }} style={defStyle.baseView}>
      {/* <ResOrDel press={set_isInret} /> */}

      <ResDelBar press={set_isInret} />
      {isInrest ? <InRest /> : <Deliv />}
    </BaseView>
  );
};

const defStyle = StyleSheet.create({
  baseView: { marginHorizontal: 0 },
});
