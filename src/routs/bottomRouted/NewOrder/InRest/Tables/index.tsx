import React, { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CText from '../../../../../components/atoms/CText';
import styleValues from '../../../../../components/utils/InterfaceStyles/styleValues';
import ColorSystem from '../../../../../configs/color/ColorSystem';

var f1: number = 1;
var f2: number = 2;
var f3: number = 3;
var f4: number = 4;
var f5: number = 5;
var f6: number = 6;
var f7: number = 7;
var f8: number = 8;
export default ({ select }: { select: (item: number) => void }) => {
  const [seltdFloor, set_seltdFloor] = useState<number>(f1);

  const tableItem: ListRenderItem<number> = ({ item }) => {
    let isSelected = item === seltdFloor;
    return (
      <CText
        text={item.toString()}
        style={defStyle.item}
        color={isSelected ? ColorSystem.BrandColor : ColorSystem.Black}
        events={{
          onPress() {
            set_seltdFloor(item);
            select(item);
          },
        }}
      />
    );
  };
  return (
    <View style={defStyle.baseView}>
      <FlatList numColumns={5} data={[f1, f2, f3, f4, f5, f6, f7, f8]} renderItem={tableItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    marginTop: styleValues.paddin03,
    alignSelf: 'center',
    // marginHorizontal: styleValues.paddin05,
  },
  item: {
    // flex: 1,
    width: wp(16),
    textAlign: 'center',
    borderWidth: 1,
    margin: styleValues.paddin01,
    borderRadius: styleValues.radius03,
    borderColor: ColorSystem.gray!(5),
  },
});
