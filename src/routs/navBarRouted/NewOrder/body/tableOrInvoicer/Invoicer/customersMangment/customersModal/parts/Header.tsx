import React, { useState, useImperativeHandle, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CText from '../../../../../../../../../components/atoms/Ctext';
import CButton from '../../../../../../../../../components/molecules/CButton/CButton';
import CInputText from '../../../../../../../../../components/molecules/CInputText';
import styleValues from '../../../../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../../../../translation/lang/basics/ILangValuesEnum';
import isTablet from '../../../../../../../../../utilities/isTablet';
import NewCustomerModal from '../../newCustomerModal';

export default React.forwardRef(({}, ref) => {
  const [newCust, setNewCust] = useState(false);
  const newCustomerModalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return {};
  });

  return (
    <>
      {newCust && <NewCustomerModal ref={newCustomerModalRef} />}
      <View style={defStyle.main}>
        <CText text={mt(labels.customers)} style={defStyle.title} />
        <CInputText style={defStyle.inp} input={{}} startIcon={{ iconName: Xml.magnifier }} />
        <CButton
          iText={{ text: mt(labels.newCustomer) }} //
          iButtonContainer={{
            fill: 'fill',
            color: ColorSystem.BrandColor,
            style: defStyle.btn,
            events: {
              onPress() {
                newCust ? newCustomerModalRef.current.showModal() : setNewCust(true);
              },
            },
          }} //
          iIconSvg={{ iconName: Xml.plus }} //
        />
      </View>
    </>
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
