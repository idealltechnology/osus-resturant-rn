import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import React, { useState, useEffect, useRef, FC } from 'react';
import { Text, LayoutAnimation, StyleSheet, Platform, TouchableOpacity, UIManager, View } from 'react-native';
import CLogo from '../../components/atoms/CLogo';
import BaseView from '../../components/organisms/BaseView';
import { ILogo } from '../../components/utils/interfacesUI/ILogo';
import { RoutsEnum } from '../../navigation/router/RoutsEnum';
import i18n from 'i18next';
import mrvTxtTest from '../../utilities/mrvTxtTest';
import userLanguage from '../../translation/lang/userLanguage';

const Splash: FC = () => {
  const [siz, sizSet] = useState(100);
  const [expanded, setExpanded] = useState(false);

  const navigation = useNavigation();
  const ref = useRef<any>();

  const _iLogo: ILogo = { size: 40 };

  useEffect(() => {
    AsyncStorage.getItem(userLanguage).then((language) => {
      i18n.init(
        {
          fallbackLng: language?.toString(),
        },
        () => {
          navigation.replace(RoutsEnum.BottomNavRouter);
        },
      );
    });
  }, []);

  return (
    <BaseView nav={useNavigation()}>
      <CLogo {..._iLogo} />
    </BaseView>
  );
};

export default Splash;

const style = StyleSheet.create({
  tile: {
    backgroundColor: 'lightgrey',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
