// import { Box,  Center, Drawer, FormControl, Heading, Input,  Slide, Stack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import BaseView from '../../../components/organisms/BaseView';

export default () => {
  const [isInrest, set_isInret] = useState(true);
  useEffect(() => {}, [isInrest]);

  return (
    <BaseView header={{ navigation: useNavigation() }} navBar={{ navigation: useNavigation() }} style={defStyle.baseView}>
      <></>
    </BaseView>
  );
};

const defStyle = StyleSheet.create({
  baseView: { marginHorizontal: 0 },
});
