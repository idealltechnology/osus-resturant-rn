//#region ... imports
import { View } from 'native-base';
import React, { FC } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import CText from '../../../../components/atoms/Ctext';
import { EnumFontSize } from '../../../../components/utils/enums/EnumFontSize';
import ColorSystem from '../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../translation/lang/basics/ILangValuesEnum';

//#endregion

const Hello: FC = () => {
  return (
    <View>
      <CText text={mt(labels.HelloAgain)} style={[defStyyl.general, defStyyl.title]} />
      <CText text={mt(labels.loginGuid)} style={[defStyyl.general, defStyyl.desc]} />
    </View>
  );
};

export default Hello;

const defStyyl = StyleSheet.create({
  general: { color: ColorSystem.Black },
  title: { fontSize: EnumFontSize.h1, fontWeight: 'bold' },
  desc: { fontSize: EnumFontSize.h5 },
});
