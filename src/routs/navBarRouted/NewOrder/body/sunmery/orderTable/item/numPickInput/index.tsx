import React, { useImperativeHandle, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CIconGenerator from '../../../../../../../../components/atoms/CIconGenerator/inedx';
import styleValues from '../../../../../../../../components/utils/enums/styleValues';
import Xml from './../../../../../../../../components/utils/svgs/Xml';
import ColorSystem from './../../../../../../../../configs/color/ColorSystem';

export default React.forwardRef(({}, ref) => {
  const [isLoading, setIsloading] = useState(false);

  useImperativeHandle(ref, () => {
    return { _onError, setIsloading };
  });

  const [error, errorSetter] = useState<boolean>(false);
  const _onError = (e: boolean) => {
    errorSetter(e);
  };

  return (
    <View style={defaultStyle.main}>
      <TextInput style={defaultStyle.inp}>26</TextInput>
      <View style={defaultStyle.icons}>
        <CIconGenerator iconName={Xml.increse} size={2} />
        <CIconGenerator iconName={Xml.decrease} size={2} />
      </View>
    </View>
  );
});

const defaultStyle = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: ColorSystem.gray!(5),
    borderRadius: styleValues.radius05,
    paddingHorizontal: styleValues.paddin01,
    paddingVertical: styleValues.paddin01,
  },
  icons: { flexDirection: 'column', justifyContent: 'space-between' },
  inp: { flex: 1, padding: 0, textAlign: 'center' },
});
