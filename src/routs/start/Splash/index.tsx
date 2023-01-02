import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useEffect, useRef, FC } from 'react';
import { StyleSheet } from 'react-native';
import CLogo from '../../../components/atoms/CLogo';
import BaseView from '../../../components/organisms/BaseView';
import { ILogo } from '../../../components/utils/interfacesUI/ILogo';
import { RoutsEnum } from '../../../navigation/router/RoutsEnum';
import i18n from 'i18next';
import userLanguage from '../../../translation/lang/basics/userLanguage';
import { ISplashProps } from './ISplashProps';

const Splash: FC<ISplashProps> = ({ navigation }) => {
  // TODO
  const [siz, sizSet] = useState(100);
  const [expanded, setExpanded] = useState(false);

  const ref = useRef<any>();

  const _iLogo: ILogo = { size: 40 };

  useEffect(() => {
    AsyncStorage.getItem(userLanguage).then((language) => {
      i18n.init(
        {
          fallbackLng: language?.toString(),
        },
        () => {
          navigation.replace(RoutsEnum.Login);
        },
      );
    });
  }, []);

  return (
    <BaseView style={defStyle.container}>
      <CLogo {..._iLogo} />
    </BaseView>
  );
};

export default Splash;

const defStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
