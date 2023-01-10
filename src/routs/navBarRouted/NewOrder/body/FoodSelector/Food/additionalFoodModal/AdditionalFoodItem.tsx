import { StyleSheet, TouchableOpacity } from 'react-native';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../utilities/isTablet';
import { IFoodItem } from '../../intefaces/IFoodItem';
import MobileFoodItem from '../FoodItem/MobileFoodItem';

export default ({ select, food, isSelected }: IFoodItem) => {
  return (
    <TouchableOpacity onPress={() => select && select(food)} style={[defStyle.baseView, { borderColor: isSelected ? ColorSystem.BrandColor : ColorSystem.gray!(50) }]}>
      <MobileFoodItem {...food} />
    </TouchableOpacity>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    borderWidth: 1,
    borderRadius: styleValues.radius10,
    width: isTablet() ? '49%' : '100%',
    marginVertical: styleValues.paddin01,
  },
});
