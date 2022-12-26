import React, { useState, useImperativeHandle, FC } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import { IText } from '../utils/interfacesUI/IText';
import ColorSystem from '../../configs/color/ColorSystem';
import { EnumFontFamilly } from '../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../utils/enums/EnumFontSize';

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
    txt = txt!.replace('undefined', '').replace('null', '');
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
    color: ColorSystem.gray!(50),
    height: 'auto',
    textAlignVertical: 'center',
  },
});
