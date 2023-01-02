import { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CButton from '../../../../../../../components/molecules/CButton';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import ColorSystem from '../../../../../../../configs/color/ColorSystem';
import { IFloor } from './IFloor';

var f1: IFloor = { id: 1, name: 'Firt floor' };
var f2: IFloor = { id: 2, name: 'Second floor' };
export default ({ select }: { select: (item: IFloor) => void }) => {
  const [seltdFloor, set_seltdFloor] = useState<IFloor>(f1);

  const floorItem: ListRenderItem<IFloor> = ({ item }) => {
    let isSelected = item.id === seltdFloor.id;
    return (
      <CButton
        iText={{
          text: item.name,
          style: {
            color: isSelected ? ColorSystem.BrandColor : ColorSystem.Black,
          },
        }}
        iButtonContainer={{
          color: isSelected ? ColorSystem.BrandColorDim : ColorSystem.gray!(5),
          style: defStyle.item,
          fill: 'fill',
          events: {
            onPress() {
              select(item);
              set_seltdFloor(item);
            },
          },
        }}
      />
    );
  };
  return (
    <View style={defStyle.baseView}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={[f1, f2]} renderItem={floorItem} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    marginTop: styleValues.paddin03, // flex: 1,
    marginBottom: styleValues.paddin02, // flex: 1,
  },
  item: { minWidth: wp(25), marginHorizontal: styleValues.paddin01 },
});
