import React, { useState } from 'react';
import { FlatList, Image, ListRenderItem, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CText from '../../../../../components/atoms/CText';
import styleValues from '../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import { IFoodCategory } from './intefaces/IFoodCategory';
import { IFoodCategoryItem } from './intefaces/IFoodCategoryItem';

export default ({ select, food, isSelected }: IFoodCategoryItem) => {
  const item = (item: IFoodCategory) => {
    return (
      <TouchableOpacity
        onPress={() => {
          // set_seltdFloor(item);
          select(item);
        }}
        style={[
          defStyle.item,
          {
            backgroundColor: isSelected ? ColorSystem.BrandColor : ColorSystem.White,
          },
        ]}
      >
        <View style={defStyle.imageView}>
          <Image source={require('../../../../../assets/Images/pizza.jpg')} style={defStyle.image} />
        </View>
        <CText text={item.name} color={!isSelected ? ColorSystem.Black : ColorSystem.White} />
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
    minWidth: wp(25),
    textAlign: 'center',
    borderWidth: 1,
    padding: styleValues.paddin01,
    paddingHorizontal: styleValues.paddin05,
    marginEnd: styleValues.paddin01,
    borderRadius: styleValues.radius05,
    borderColor: ColorSystem.gray!(5),
  },
  imageView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { height: wp(5), width: wp(5) },
  categories: {},
});
