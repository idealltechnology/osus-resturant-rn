import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CText from '../../../../../../components/atoms/Ctext';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../configs/color/ColorSystem';
import { IFoodCategory } from '../intefaces/IFoodCategory';
import { IFoodCategoryItem } from '../intefaces/IFoodCategoryItem';
import CommonStyles from './../../../../../../configs/CommonStyles';

export default ({ select, food, isSelected }: IFoodCategoryItem) => {
  const item = (item: IFoodCategory) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // set_seltdFloor(item);
          select(item);
        }}
        style={[
          CommonStyles.card,
          defStyle.item,
          {
            backgroundColor: isSelected ? ColorSystem.BrandColor : ColorSystem.White,
          },
        ]}
      >
        <View style={defStyle.imageView}>
          <Image source={require('../../../../../../assets/Images/pizza.jpg')} style={defStyle.image} />
        </View>
        <CText
          text={item.name}
          style={{
            color: !isSelected ? ColorSystem.Black : ColorSystem.White,
          }}
        />
      </TouchableOpacity>
    );
  };
  return <>{item(food)}</>;
};

const defStyle = StyleSheet.create({
  baseView: {
    marginTop: styleValues.paddin03,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    minWidth: styleValues.paddin15,
    height: styleValues.paddin10,
    paddingHorizontal: styleValues.paddin02,
    marginEnd: styleValues.paddin01,
  },
  imageView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { height: styleValues.paddin05, width: styleValues.paddin05 },
  categories: {},
});
