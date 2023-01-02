import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CText from '../../../../../../../components/atoms/CText';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../utilities/isTablet';
import { IFoodItem } from '../intefaces/IFoodItem';

export default ({ select, food, isSelected }: IFoodItem) => {
  return (
    <TouchableOpacity
      onPress={() => {
        select(food);
      }}
      style={[
        defStyle.item,
        isTablet() ? defStyle.tabletItem : defStyle.mobileItem,
        {
          borderColor: isSelected ? ColorSystem.BrandColor : ColorSystem.gray!(5),
        },
      ]}
    >
      <CText style={[defStyle.mobilFlex]} text={food.code} />
      <View style={[defStyle.imageView, defStyle.mobilFlex]}>
        <Image source={require('../../../../../../../assets/Images/pizza.jpg')} style={defStyle.image} />
      </View>
      <CText style={[defStyle.lbl, defStyle.mobilFlex]} text={food.name} />
      <CText style={[defStyle.lbl, defStyle.price, defStyle.mobilFlex]} text={food.price + ' SAR'} />
    </TouchableOpacity>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    marginTop: styleValues.paddin03,
    alignSelf: 'center',
  },

  mobilFlex: !isTablet() ? { flex: 1 } : {},

  mobileItem: {
    flexDirection: 'row',
    marginVertical: styleValues.paddin01,
    justifyContent: 'space-evenly',
  },
  tabletItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: styleValues.paddin15 * 1.4,
    margin: styleValues.paddin01,
  },
  item: {
    borderWidth: 1,
    padding: styleValues.paddin01,
    borderRadius: styleValues.radius05,
  },
  imageView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { height: wp(5), width: wp(5) },
  lbl: { textAlign: 'center' },
  price: { color: ColorSystem.Error, margin: styleValues.paddin01 },
});
