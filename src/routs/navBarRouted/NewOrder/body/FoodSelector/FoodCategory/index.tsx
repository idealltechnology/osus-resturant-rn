import { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import CText from '../../../../../../components/atoms/Ctext';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import mrvTxtTest from '../../../../../../utilities/mrvTxtTest';
import { IFood } from '../intefaces/IFood';
import { IFoodCategory } from '../intefaces/IFoodCategory';
import FoodCategoryItem from './FoodCategoryItem';

var f1: IFood = { code: '', price: 2, _id: 1, name: 'pizza', image: '' };
var f2: IFoodCategory = { id: 2, name: 'salad', image: '' };
var f3: IFoodCategory = { id: 3, name: 'coca', image: '' };
var f4: IFoodCategory = { id: 4, name: 'soda', image: '' };
var f5: IFoodCategory = { id: 5, name: 'ghorme sabzi', image: '' };
var f6: IFoodCategory = { id: 6, name: 'joice', image: '' };
var f7: IFoodCategory = { id: 7, name: 'fish', image: '' };
var f8: IFoodCategory = { id: 8, name: 'sea plate', image: '' };

export default ({ select }: { select: (item: IFoodCategory) => void }) => {
  const [selectedFoodCategory, set_selectedFoodCategory] = useState<IFoodCategory>(f2);

  const foodCategoryItem: ListRenderItem<IFoodCategory> = ({ item }) => {
    let isSelected = item.id === selectedFoodCategory.id;
    return (
      <FoodCategoryItem
        isSelected={isSelected}
        food={item}
        select={() => {
          set_selectedFoodCategory(item);
          mrvTxtTest.TSTtoast(item);
        }}
      />
    );
  };

  return (
    <>
      <View style={defStyle.baseView}>
        <View style={defStyle.categories}>
          <CText text="Categories" />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[f2, f3, f4, f5, f6, f7, f8]}
          renderItem={foodCategoryItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

const defStyle = StyleSheet.create({
  baseView: {},
  categories: { flexDirection: 'row', marginVertical: styleValues.paddin03 },
});
