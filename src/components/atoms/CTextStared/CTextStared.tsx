import { Spinner, View } from 'native-base';
import React, { FC, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { EnumFontFamilly } from '../../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import { ITextStared } from './ITextStared';
import { CText } from './../Ctext/index';

export const CTextStared: FC<ITextStared> = React.forwardRef(({ text, isNotRquierd }, ref) => {
  return (
    <View style={[defaultStyle.container]}>
      <CText {...text} />
      {!isNotRquierd && <Text style={defaultStyle.star}>*</Text>}
    </View>
  );
});
export default CTextStared;

const defaultStyle = StyleSheet.create({
  container: { flexDirection: 'row' },
  star: { color: ColorSystem.Error },
});
