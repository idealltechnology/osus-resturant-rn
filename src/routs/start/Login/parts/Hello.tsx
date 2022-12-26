//#region ... imports
import React, { FC } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import CText from '../../../../components/atoms/CText';
import { EnumFontSize } from '../../../../components/utils/enums/EnumFontSize';
import ColorSystem from '../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../translation/lang/interface/ILangValuesEnum';

//#endregion

const Hello: FC = () => {
  return (
    <KeyboardAvoidingView>
      <CText text={mt(labels.HelloAgain)} style={[defStyyl.general, defStyyl.title]} />
      <CText text={mt(labels.loginGuid)} style={[defStyyl.general, defStyyl.desc]} />
    </KeyboardAvoidingView>
  );
};

export default Hello;

const defStyyl = StyleSheet.create({
  general: { color: ColorSystem.Black },
  title: { fontSize: EnumFontSize.h1, fontWeight: 'bold' },
  desc: { fontSize: EnumFontSize.h5 },
});
