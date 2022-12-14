import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CButton from '../../../../../../components/molecules/CButton/CButton';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import isTablet from '../../../../../../utilities/isTablet';
import CustomersModal from './customersMangment/customersModal';

export default () => {
  const customersModalRef = useRef<any>();

  // TODO
  return (
    <View style={defStyle.inDelView}>
      <CustomersModal ref={customersModalRef} />
      <CButton
        iText={{ style: defStyle.txt, text: 'selectCustome' }} //
        iButtonContainer={{
          fill: 'fill',
          color: ColorSystem.BrandColor,
          style: defStyle.btn,
          events: {
            onPress() {
              customersModalRef.current.showModal();
            },
          },
        }} //
        iIconSvg={{ iconName: Xml.plus }} //
      />
      <CButton
        iText={{ style: defStyle.txt, text: mt(labels.pausInvoice) }} //
        iButtonContainer={{ fill: 'dim', color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.pause }}
      />
      <CButton
        iText={{ style: defStyle.txt, text: mt(labels.previewInvoice) }} //
        iButtonContainer={{ color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.eye }}
      />
      <CButton
        iText={{ style: defStyle.txt, text: mt(labels.finishInvoice) }} //
        iButtonContainer={{ fill: 'fill', color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.tik }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  inDelView: {
    flexDirection: isTablet() ? 'row' : 'column',
    // flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: isTablet() ? { flex: 1, marginHorizontal: styleValues.paddin01 } : { width: '100%', marginVertical: styleValues.paddin03 },
  txt: {},
});
