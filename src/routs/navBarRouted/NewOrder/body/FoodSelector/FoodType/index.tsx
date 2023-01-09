import { useState, useRef } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import CText from '../../../../../../components/atoms/Ctext';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import isTablet from '../../../../../../utilities/isTablet';
import mrvTxtTest from '../../../../../../utilities/mrvTxtTest';
import FoodCategoryItem from './FoodCategoryItem';
import FoodItem from './FoodItem';
import { IFood } from '../intefaces/IFood';
import { IFoodCategory } from '../intefaces/IFoodCategory';
import AdditionalFood from '../additionalFoodModal';

var f1: IFood = { code: '', price: 2, _id: 1, name: 'pizza', image: '' };
var f2: IFoodCategory = { id: 2, name: 'salad', image: '' };
var f3: IFoodCategory = { id: 3, name: 'coca', image: '' };
var f4: IFoodCategory = { id: 4, name: 'soda', image: '' };
var f5: IFoodCategory = { id: 5, name: 'ghorme sabzi', image: '' };
var f6: IFoodCategory = { id: 6, name: 'joice', image: '' };
var f7: IFoodCategory = { id: 7, name: 'fish', image: '' };
var f8: IFoodCategory = { id: 8, name: 'sea plate', image: '' };

var ff1: IFood = { code: '1625', price: 2, _id: 1, name: 'pizza', image: '' };
var ff2: IFood = { code: '1625', price: 2, _id: 2, name: 'salad', image: '' };
var ff3: IFood = { code: '1625', price: 2, _id: 3, name: 'coca', image: '' };
var ff4: IFood = { code: '1625', price: 2, _id: 4, name: 'soda', image: '' };
var ff5: IFood = { code: '1625', price: 2, _id: 5, name: 'soda2', image: '' };
var ff6: IFood = { code: '1625', price: 2, _id: 6, name: 'joice', image: '' };
var ff7: IFood = { code: '1625', price: 2, _id: 7, name: 'fish', image: '' };
var ff8: IFood = { code: '1625', price: 2, _id: 8, name: 'sea plate', image: '' };
var fff: IFood = { code: '1625', price: 2, _id: 5, name: 'ghorme sabzi', image: '', addList: [ff1, ff2, ff3, ff4, ff6, ff8] };
export default ({ select }: { select: (item: IFoodCategory) => void }) => {
  const adfMoalRef = useRef<any>();

  const [selectedFoodCategory, set_selectedFoodCategory] = useState<IFoodCategory>(f2);

  const [selectedFood, set_selectedFood] = useState<IFood | undefined>();

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

  const foodItem: ListRenderItem<IFood> = ({ item }) => {
    let isSelected = item === selectedFood;
    return (
      <FoodItem
        isSelected={isSelected}
        food={item}
        select={(item) => {
          adfMoalRef.current.showModal(item);
          // select(item);

          set_selectedFood(item);
          // mrvTxtTest.TSTtoast(item);
        }}
      />
    );
  };

  return (
    <>
      <AdditionalFood ref={adfMoalRef} />
      <View style={defStyle.baseView}>
        <View style={defStyle.categories}>
          <CText text="Categories" />
        </View>
        <View style={defStyle.list}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[f2, f3, f4, f5, f6, f7, f8]}
            renderItem={foodCategoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {!isTablet() ? (
          <FlatList
            numColumns={isTablet() ? 3 : 1}
            showsVerticalScrollIndicator={false}
            data={[fff, ff1, ff2, ff3, ff4, fff, fff, fff, ff6, ff7, ff8]}
            renderItem={foodItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
            {[fff, ff1, ff2, ff3, ff4, ff5, ff6, ff7, ff8].map((item, index) => {
              let isSelected = item === selectedFood;
              return (
                <FoodItem
                  isSelected={isSelected}
                  food={item}
                  select={(item) => {
                    adfMoalRef.current.showModal(item);
                    // select(item);

                    set_selectedFood(item);
                    // mrvTxtTest.TSTtoast(item);
                  }}
                />
              );
            })}
          </View>
        )}
      </View>
    </>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    marginTop: styleValues.paddin05,
  },
  list: {
    marginTop: styleValues.paddin03,
  },
  categories: {},
});
