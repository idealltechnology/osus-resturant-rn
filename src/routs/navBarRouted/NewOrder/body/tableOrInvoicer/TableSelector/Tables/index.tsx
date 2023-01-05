import { useState } from 'react';
import { StyleSheet, FlatList, ListRenderItem } from 'react-native';
import CText from '../../../../../../../components/atoms/CText';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../utilities/isTablet';
import { Model } from './item/Model';

export default ({ select }: { select: (item: Model) => void }) => {
  const [seltdFloor, set_seltdFloor] = useState<Model>({ tableNumber: '30', _id: '1' });

  // const tableItem = (item: number) => {

  const tableItem: ListRenderItem<Model> = ({ item }) => {
    let isSelected = item === seltdFloor;
    return (
      <CText
        key={item._id}
        text={item.tableNumber}
        style={[
          defStyle.item,
          {
            color: isSelected ? ColorSystem.BrandColor : ColorSystem.Black,
          },
        ]}
        events={{
          onPress() {
            set_seltdFloor(item);
            select(item);
          },
        }}
      />
    );
  };
  function tblMaker() {
    let list: Model[] = [];
    for (let index = 0; index < 20; index++) {
      var ind = index + 1 + '';

      list.push({ _id: ind, tableNumber: ind });
    }
    return list;
  }
  return (
    // <ScrollView horizontal={isTablet()}>
    //   <View style={defStyle.baseView}>{tblMaker().map((item, index) => tableItem(item))}</View>
    // </ScrollView>
    <FlatList showsVerticalScrollIndicator={false} horizontal={isTablet()} numColumns={isTablet() ? undefined : 6} data={tblMaker()} renderItem={tableItem} />
  );
};

const defStyle = StyleSheet.create({
  item: {
    // flex: 1,
    width: styleValues.paddin10,
    height: styleValues.paddin12,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    marginHorizontal: styleValues.paddin02,
    marginVertical: styleValues.paddin01,

    borderRadius: styleValues.radius10,
    borderColor: ColorSystem.gray!(5),
  },
});
