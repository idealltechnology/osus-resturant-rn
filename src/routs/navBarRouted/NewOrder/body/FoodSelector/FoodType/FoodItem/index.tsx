import { StyleSheet, TouchableOpacity } from 'react-native';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../utilities/isTablet';
import { IFoodItem } from '../../intefaces/IFoodItem';
import MobileItem from './MobileItem';
import TabletItem from './TabletItem';

export default ({ select, food, isSelected }: IFoodItem) => {
  return (
    <TouchableOpacity onPress={() => select(food)} style={[defStyle.baseView, { borderColor: isSelected ? ColorSystem.BrandColor : ColorSystem.gray!(50) }]}>
      {isTablet() ? <TabletItem {...food} /> : <MobileItem {...food} />}
    </TouchableOpacity>
  );
};

const defStyle = StyleSheet.create({
  baseView: { borderWidth: 1, margin: styleValues.paddin02, borderRadius: styleValues.radius10 },
});
