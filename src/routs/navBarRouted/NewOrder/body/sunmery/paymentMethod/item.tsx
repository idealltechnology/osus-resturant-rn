import { StyleSheet } from 'react-native';
import CButton from '../../../../../../components/molecules/CButton/CButton';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import { IButtonContainer } from './../../../../../../components/utils/interfacesUI/IButtonContainer';
import ColorSystem from './../../../../../../configs/color/ColorSystem';
import { Model } from './Model';
export default ({ selected, id, btn }: Model) => {
  const selecedI: IButtonContainer = { style: defStyle.btn, color: ColorSystem.BrandColor, fill: 'dim', events: btn.iButtonContainer?.events };
  const deSelecedI: IButtonContainer = { style: defStyle.btn, color: ColorSystem.Black!, events: btn.iButtonContainer?.events };
  function caller() {
    return selected === id ? selecedI : deSelecedI;
  }
  return <CButton style={defStyle.btn} iText={{ text: btn.iText?.text }} iButtonContainer={caller()} iIconSvg={btn.iIconSvg} />;
};

const defStyle = StyleSheet.create({
  main: { flexDirection: 'row', marginVertical: styleValues.paddin02 },
  inCommen: {
    fontSize: EnumFontSize.h5,
  },
  btn: { flex: 1, borderColor: ColorSystem.gray!(10) },
  txt: { flex: 2, textAlign: 'justify' },
  lbl: { flex: 1 },
});
