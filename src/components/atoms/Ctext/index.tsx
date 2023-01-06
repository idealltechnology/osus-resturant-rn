import { Spinner } from 'native-base';
import React, { FC, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import { EnumFontFamilly } from '../../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import { IText } from './IText';

export const CText: FC<IText> = React.forwardRef(({ text, events, style, disabled, bold }, ref) => {
  const [isLoading, setIsloading] = useState(false);

  useImperativeHandle(ref, () => {
    return { _onError, setIsloading };
  });

  const [error, errorSetter] = useState<boolean>(false);
  const _onError = (e: boolean) => {
    errorSetter(e);
  };
  const _text = () => {
    var txt = text || '';

    txt = txt.toString()!.replace('undefined', '').replace('null', '');

    return txt;
  };

  return (
    <Text onPress={events && events.onPress && events!.onPress} style={[defaultStyle.txtStyle, bold && { fontWeight: 'bold' }, disabled && { color: ColorSystem.gray!(35) }, style]}>
      {_text()}
      {isLoading && <Spinner color={ColorSystem.White} />}
    </Text>
  );
});
export default CText;

const defaultStyle = StyleSheet.create({
  txtStyle: {
    fontFamily: EnumFontFamilly.regularYekan,
    fontSize: EnumFontSize.h5,
    color: ColorSystem.Black,
    height: 'auto',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
