import React, { useEffect, useImperativeHandle, FC } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import ColorSystem from '../../configs/color/ColorSystem';
import CIconGenerator from '../atoms/CIconGenerator';
import CText from '../atoms/CText';
import { IHeader } from '../utils/interfacesUI/IHeader';
import Xml from '../utils/svgs/Xml';

export const CHeader: FC<IHeader> = React.forwardRef(({ nav }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  const routName = () => {
    let state = nav.getState();
    let index = state.index;
    let routs = state.routeNames;
    return routs[index];
  };
  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <View style={defStyle.conttainer}>
      {nav.canGoBack() && (
        <CIconGenerator
          iconName={Xml.lineArrowLeft(ColorSystem.Black!)}
          events={{
            onPress() {
              nav.goBack();
            },
          }}
        />
      )}
      <CText text={routName()} style={defStyle.text} />
    </View>
  );
});

export default CHeader;

const defStyle = StyleSheet.create({
  conttainer: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
  text: { flex: 1, textAlign: 'center' },
});
