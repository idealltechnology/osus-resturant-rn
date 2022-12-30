import { StyleSheet, View } from 'react-native';
import CButton from '../../../../components/molecules/CButton';
import styleValues from '../../../../components/utils/enums/styleValues';
import Xml from '../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../configs/color/ColorSystem';

export default () => {
  return (
    <View style={defStyle.inDelView}>
      <CButton
        iText={{ style: defStyle.txt, text: 'new customer' }} //
        iButtonContainer={{ fill: 'fill', color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.plus }} //
      />
      <CButton
        iText={{ style: defStyle.txt, text: 'paus invoice' }} //
        iButtonContainer={{ fill: 'dim', color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.pause }}
      />
      <CButton
        iText={{ style: defStyle.txt, text: 'preview invoice' }} //
        iButtonContainer={{ color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.eye }}
      />
      <CButton
        iText={{ style: defStyle.txt, text: 'finish invoice' }} //
        iButtonContainer={{ fill: 'fill', color: ColorSystem.BrandColor, style: defStyle.btn }} //
        iIconSvg={{ iconName: Xml.tik }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  inDelView: {
    flexDirection: 'row',
    marginTop: styleValues.paddin03,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    margin: styleValues.paddin01,
    width: styleValues.paddin05 * 8.4,
  },
  txt: {},
});
