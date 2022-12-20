import React, { useState, useImperativeHandle, FC } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Spinner, View } from 'native-base';
import { ITextStared } from '../utils/interfacesUI/ITextStared';
import ColorSystem from '../../configs/color/ColorSystem';
import { EnumFontFamilly } from '../utils/enums/EnumFontFamilly';
import { EnumFontSize } from '../utils/enums/EnumFontSize';

export const CTextStared: FC<ITextStared> = React.forwardRef(({ text, events, style, isNotRquierd }, ref) => {
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
    <View style={defaultStyle.container}>
      <Text onPress={events && events.onPress && events!.onPress} style={[defaultStyle.txtStyle, style]}>
        {_text()}
        {isLoading && <Spinner color={ColorSystem.White} />}
      </Text>
      {!isNotRquierd && <Text style={defaultStyle.star}>*</Text>}
    </View>
  );
});
export default CTextStared;

const defaultStyle = StyleSheet.create({
  container: { flexDirection: 'row' },
  txtStyle: {
    fontFamily: EnumFontFamilly.regularYekan,
    fontSize: EnumFontSize.h5,
    // textAlign: 'center',
    // width: '100%',
    color: ColorSystem.F_Gray!(90),
    height: 'auto',
    textAlignVertical: 'center',
  },
  star: { color: ColorSystem.Error },
});
