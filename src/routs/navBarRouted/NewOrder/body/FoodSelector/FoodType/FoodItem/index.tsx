import { StyleSheet, TouchableOpacity } from 'react-native';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import CommonStyles, { borderColor } from '../../../../../../../configs/CommonStyles';
import isTablet from '../../../../../../../utilities/isTablet';
import { IFoodItem } from '../../intefaces/IFoodItem';
import MobileItem from './MobileFoodItem';
import TabletItem from './TabletFoodItem';

export default ({ select, food, isSelected }: IFoodItem) => {
  return (
    <TouchableOpacity onPress={() => select!(food)} style={[CommonStyles.card, defStyle.baseView, { borderColor: isSelected ? ColorSystem.BrandColor : borderColor }]}>
      {isTablet() ? <TabletItem {...food} /> : <MobileItem {...food} />}
    </TouchableOpacity>
  );
};

const defStyle = StyleSheet.create({
  baseView: { margin: styleValues.paddin02 },
});
