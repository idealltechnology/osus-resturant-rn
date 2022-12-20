import React from 'react';
import { StyleSheet } from 'react-native';
import CButton from '../../../../../components/molecules/CButton';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import { InterFace } from './InterFace';

export default ({ selected, text, press }: InterFace) => {
  return (
    <CButton
      iText={{
        text: text,
        bold: true,
        color: selected ? ColorSystem.White : ColorSystem.F_Gray!(70),
      }}
      iButtonContainer={{
        events: {
          onPress() {
            press();
          },
        },
        fill: true,
        color: selected ? ColorSystem.BrandColor : ColorSystem.F_Gray!(5),
        style: defStyle.baseView,
      }}
    />
  );
};

const defStyle = StyleSheet.create({
  baseView: { width: '48%' },
});
