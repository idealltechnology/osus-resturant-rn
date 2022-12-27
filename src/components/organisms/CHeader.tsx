import React, { useEffect, useImperativeHandle, FC } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import ColorSystem from '../../configs/color/ColorSystem';
import CIconGenerator from '../atoms/CIconGenerator';
import CText from '../atoms/CText';
import { IHeader } from '../utils/interfacesUI/IHeader';
import Xml from '../utils/svgs/Xml';
import LangChanger from './langChanger';
import { t } from 'i18next';
import mrvTxtTest from '../../utilities/mrvTxtTest';

export const CHeader: FC<IHeader> = React.forwardRef(({ navigation, noTitle }, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  const routName = () => {
    let state = navigation.getState();
    let index = state.index;
    let routs = state.routes;

    return t(`routs.${routs[index].name}`);
  };
  useEffect(() => {
    return () => {
      //destroy
    };
  }, []);

  return (
    <View style={defStyle.conttainer}>
      <View style={defStyle.sideICons}>
        {navigation.canGoBack() && (
          <CIconGenerator
            iconName={Xml.lineArrowLeft(ColorSystem.Black!)}
            events={{
              onPress() {
                navigation.goBack();
              },
            }}
          />
        )}
      </View>

      <View style={defStyle.textConttainer}>{!noTitle && <CText text={routName()} style={defStyle.text} />}</View>
      <View style={defStyle.sideICons}>
        <LangChanger />
      </View>
    </View>
  );
});

export default CHeader;

const defStyle = StyleSheet.create({
  conttainer: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
  textConttainer: { flex: 13, justifyContent: 'center' },
  text: { textAlign: 'center', fontWeight: 'bold' },
  sideICons: { flex: 1, height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
});
