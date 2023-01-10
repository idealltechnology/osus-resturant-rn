import { StyleSheet } from 'react-native';
import { EnumFontSize } from '../../../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import isTablet from '../../../../../../../utilities/isTablet';
import ColorSystem from './../../../../../../../configs/color/ColorSystem';
const borderColor = ColorSystem.Border;

function container(ort: 'row-reverse' | 'column') {
  return StyleSheet.create({
    container: {
      flexDirection: ort,
      borderWidth: 1,
      borderRadius: styleValues.radius03,
      overflow: 'hidden',
      borderColor: borderColor,
    },
  }).container;
}

function main(ort: 'row' | 'column') {
  return { flexDirection: ort };
}

function inCommon(tab: boolean) {
  let inCommon = StyleSheet.create({
    inCommon: {
      height: tab ? styleValues.paddin10 : 'auto',
      width: tab ? styleValues.paddin15 : 'auto',
      borderEndWidth: 1,
      borderBottomWidth: 1,
      borderColor: borderColor,
      padding: styleValues.paddin01,
      justifyContent: 'center',
    },
  });

  return inCommon;
}

const txt = { fontSize: EnumFontSize.h6 };

const tab = StyleSheet.create({
  container: container('row-reverse'),
  main: main('column'),
  inCommon: inCommon(true).inCommon,
  productName: {},
  quantity: {},
  price: {},
  discount: {},
  total: {},
  action: {},
  txt: txt,
});

const mob = StyleSheet.create({
  container: container('column'),
  main: main('row'),
  inCommon: inCommon(false).inCommon,
  productName: { flex: 11 },
  quantity: { flex: 8 },
  price: { flex: 6 },
  discount: { flex: 8 },
  total: { flex: 6 },
  action: { flex: 6, borderEndWidth: 0 },
  txt: txt,
});

export default isTablet() ? tab : mob;
// export default isTablet() ? tab : mob;
