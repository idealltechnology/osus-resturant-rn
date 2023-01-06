import React from 'react';
import { StyleSheet, View } from 'react-native';
import CText from '../../../../../../components/atoms/Ctext';
import CButton from '../../../../../../components/molecules/CButton/CButton';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import Xml from '../../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../../configs/color/ColorSystem';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';

export default React.forwardRef(({}, ref) => {
  return (
    <View style={defStyl.additional}>
      <CText text={mt(labels.additionalFood)} style={defStyl.additionalTitle} />
      <CButton iText={{ text: 'Add' }} iButtonContainer={{ color: ColorSystem.BrandColor, fill: 'dim', style: defStyl.additionalBtn }} iIconSvg={{ iconName: Xml.plus }} />
    </View>
  );
});

const defStyl = StyleSheet.create({
  additionalBtn: { flex: 2 },
  additionalTitle: { flex: 5 },
  additional: {
    flexDirection: 'row',
  },
  additionalList: {
    padding: styleValues.paddin01,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
});
