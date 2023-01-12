import React from 'react';
import { StyleSheet, View } from 'react-native';
import CSeprator from '../../../../../../../../components/atoms/CSeprator';
import CButton from '../../../../../../../../components/molecules/CButton/CButton';
import styleValues from '../../../../../../../../components/utils/enums/styleValues';
import InpItem from './inpItem';
// import Header from './header';
import ColorSystem from './../../../../../../../../configs/color/ColorSystem';
import mt, { labels } from './../../../../../../../../translation/lang/basics/ILangValuesEnum';
import CText from '../../../../../../../../components/atoms/Ctext';
import CGap from '../../../../../../../../components/atoms/CGap';

export default React.forwardRef(({}, ref) => {
  return (
    <View>
      <CSeprator />
      <View style={defStyle.main}>
        <View>
          <InpItem name="customerName" />
          <InpItem name="phoneNumber" />
          <InpItem name="address" />
        </View>
        <View style={defStyle.btns}>
          <CText text={'Close'} />
          <CGap thick={50} />
          <CButton iButtonContainer={{ color: ColorSystem.BrandColor, fill: 'fill' }} iText={{ text: mt(labels.newCustomer) }} />
        </View>
      </View>
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
  },

  btns: { marginTop: styleValues.paddin05, flexDirection: 'row', justifyContent: 'flex-end' },
});
