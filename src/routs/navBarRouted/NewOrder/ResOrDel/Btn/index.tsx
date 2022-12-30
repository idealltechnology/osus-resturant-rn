import { StyleSheet } from 'react-native';
import CButton from '../../../../../components/molecules/CButton';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import { InterFace } from './InterFace';

export default ({ selected, text, press }: InterFace) => {
  return (
    <CButton
      iText={{
        text: text,
        bold: true,
        style: {
          color: selected ? ColorSystem.White : ColorSystem.gray!(70),
        },
      }}
      iButtonContainer={{
        events: {
          onPress() {
            press();
          },
        },
        fill: 'fill',
        color: selected ? ColorSystem.BrandColor : ColorSystem.gray!(5),
        style: defStyle.baseView,
      }}
    />
  );
};

const defStyle = StyleSheet.create({
  baseView: { flex: 10 },
});
