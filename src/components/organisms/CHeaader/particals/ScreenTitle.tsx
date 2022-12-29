import React, { useEffect, useImperativeHandle, FC } from 'react';
import { StyleSheet } from 'react-native';
import CText from '../../../atoms/CText';
import { t } from 'i18next';
import { IHeader } from '../IHeader';

export default React.forwardRef(({ navigation }: IHeader) => {
  const routName = () => {
    let state = navigation.getState();
    let index = state.index;
    let routs = state.routes;

    return t(`routs.${routs[index].name}`);
  };

  return <CText text={routName()} style={defStyle.text} />;
});

const defStyle = StyleSheet.create({
  text: { textAlign: 'center', fontWeight: 'bold' },
});
