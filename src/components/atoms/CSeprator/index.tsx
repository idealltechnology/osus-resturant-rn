import React, { FC } from 'react';
import { View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';

export const CSeprator: FC<{ color?: string; thikNess?: number }> = ({ color, thikNess }) => {
  return <View style={{ borderWidth: thikNess ? thikNess : 0.5, borderColor: color ? color : ColorSystem.Border + '50' }} />;
};
export default CSeprator;
