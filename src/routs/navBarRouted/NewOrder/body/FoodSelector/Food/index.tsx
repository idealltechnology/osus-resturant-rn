import { Fragment, useRef, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import isTablet from '../../../../../../utilities/isTablet';
import { IFood } from '../intefaces/IFood';
import { IFoodCategory } from '../intefaces/IFoodCategory';
import AdditionalFoodModal from './additionalFoodModal';
import FoodItem from './FoodItem';

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

  const [selectedFood, set_selectedFood] = useState<IFood | undefined>();

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
      <AdditionalFoodModal ref={adfMoalRef} />
      {/* 
      {!isTablet() ? (
        <View>
          <FlatList data={[fff, ff1, ff2, ff3, ff4, fff, fff, fff, ff6, ff7, ff8]} renderItem={foodItem} keyExtractor={(item, index) => index.toString()} />
        </View>
      ) : ( */}
      <View style={[isTablet() && { flexWrap: 'wrap', flexDirection: 'row' }, { justifyContent: 'center' }]}>
        {[fff, ff1, ff2, ff3, ff4, ff5, ff6, ff7, ff8].map((item, index) => {
          let isSelected = item === selectedFood;
          return (
            <Fragment key={index}>
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
            </Fragment>
          );
        })}
      </View>
      {/* )} */}
    </>
  );
};
