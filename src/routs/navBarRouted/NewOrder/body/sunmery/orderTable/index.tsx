import { Fragment } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import isTablet from '../../../../../../utilities/isTablet';
import ColorSystem from './../../../../../../configs/color/ColorSystem';
import Item from './item';
import { Model } from './item/Model';
import style from './item/style';
import Titles from './Titles';

const it1: Model = { action: 'action', discount: 5, price: 23, productName: 'salad', quantity: 3, total: 69 };
const it2: Model = { action: 'action', discount: 8, price: 15, productName: 'macaroni', quantity: 5, total: 45 };
const it3: Model = { action: 'action', discount: 0, price: 30, productName: 'chilken', quantity: 2, total: 60 };
const it4: Model = { action: 'action', discount: 12, price: 23, productName: 'salad', quantity: 3, total: 1500 };
const list: Model[] = [it1, it2, it3, it4];
export default ({ num, typ }: { num: string; typ: string }) => {
  function lister(len: number) {
    for (let index = 0; index < len; index++) {
      list.push(it4);
    }
    return list;
  }
  return (
    <View style={style.container}>
      <Titles />
      <ScrollView horizontal={isTablet()}>
        {lister(10).map((item, index) => (
          <Fragment key={index}>
            <Item {...item} />
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};
