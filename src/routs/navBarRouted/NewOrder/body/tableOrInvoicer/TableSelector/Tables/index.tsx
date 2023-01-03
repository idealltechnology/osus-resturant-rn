import { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CText from '../../../../../../../components/atoms/CText';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import isTablet from '../../../../../../../utilities/isTablet';

export default ({ select }: { select: (item: number) => void }) => {
  const [seltdFloor, set_seltdFloor] = useState<number>(30);

  const tableItem = (item: number) => {
    let isSelected = item === seltdFloor;
    return (
      <CText
        key={item}
        text={item.toString()}
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
    let list: number[] = [];
    for (let index = 0; index < 20; index++) {
      list.push(index + 1);
    }
    return list;
  }
  return (
    // <ScrollView horizontal={isTablet()}>
    //   <View style={defStyle.baseView}>{tblMaker().map((item, index) => tableItem(item))}</View>
    // </ScrollView>
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={defStyle.baseView}
      horizontal={isTablet()}
      numColumns={isTablet() ? undefined : 6}
      data={tblMaker()}
      renderItem={({ item }) => tableItem(item)}
    />
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
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
