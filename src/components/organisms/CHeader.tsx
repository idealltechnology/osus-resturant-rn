import React, { useEffect, useImperativeHandle, FC } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import ColorSystem from '../../configs/color/ColorSystem';
import CIconGenerator from '../atoms/CIconGenerator';
import CText from '../atoms/CText';
import { IHeader } from '../utils/interfacesUI/IHeader';
import Xml from '../utils/svgs/Xml';
import LangChanger from './langChanger';
import { t } from 'i18next';

export const CHeader: FC<IHeader> = React.forwardRef(({ nav }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  const routName = () => {
    let state = nav.getState();
    let index = state.index;
    let routs = state.routeNames;
    return t(`routs.${routs[index]}`);
  };
  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <View style={defStyle.conttainer}>
      <View style={defStyle.sideICons}>
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
      </View>
      <CText text={routName()} style={defStyle.text} />
      <View style={defStyle.sideICons}>
        <LangChanger />
      </View>
    </View>
  );
});

export default CHeader;

const defStyle = StyleSheet.create({
  conttainer: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
  text: { textAlign: 'center', flex: 13 },
  sideICons: { flex: 1, height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
});
