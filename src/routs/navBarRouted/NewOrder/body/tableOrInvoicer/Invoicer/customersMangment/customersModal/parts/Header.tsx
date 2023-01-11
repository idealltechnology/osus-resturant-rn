import React, { useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import CText from '../../../../../../../../../components/atoms/Ctext';
import CButton from '../../../../../../../../../components/molecules/CButton/CButton';
import CInputText from '../../../../../../../../../components/molecules/CInputText';
import styleValues from '../../../../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../../../../translation/lang/basics/ILangValuesEnum';
import isTablet from '../../../../../../../../../utilities/isTablet';

export default React.forwardRef(({}, ref) => {
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <View style={defStyle.main}>
      <CText text={'Customers'} style={defStyle.title} />
      <CInputText style={defStyle.inp} input={{}} startIcon={{ iconName: Xml.magnifier }} />
      <CButton
        iText={{ text: mt(labels.newCustomer) }} //
        iButtonContainer={{
          fill: 'fill',
          color: ColorSystem.BrandColor,
          style: defStyle.btn,
          events: { onPress() {} },
        }} //
        iIconSvg={{ iconName: Xml.plus }} //
      />
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: {
    flexDirection: isTablet() ? 'row' : 'column',
    justifyContent: 'space-between',
  },
  btn: { marginHorizontal: styleValues.paddin01 },
  title: { textAlign: 'left' },
  inp: isTablet() ? { width: '55%' } : { marginVertical: styleValues.paddin01 },
});
