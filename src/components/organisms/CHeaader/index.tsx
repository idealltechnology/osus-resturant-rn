import React, { useImperativeHandle } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import CIconGenerator from '../../atoms/CIconGenerator';
import { IHeader } from './IHeader';
import Xml from '../../utils/svgs/Xml';
import Title from './particals/ScreenTitle';
import UserInfo from './particals/userInfo';
import styleValues from '../../utils/enums/styleValues';

export default React.forwardRef(({ navigation, noTitle }: IHeader, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.container}>
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

      <View style={defStyle.textConttainer}>{!noTitle && <Title navigation={navigation} />}</View>
      <View style={defStyle.sideICons}>
        <UserInfo />
      </View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  container: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', padding: styleValues.paddin03 },
  textConttainer: { flex: 1, justifyContent: 'flex-start', flexDirection: 'row' },
  sideICons: { height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
});
