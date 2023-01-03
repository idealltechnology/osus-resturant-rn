import { View, StyleSheet } from 'react-native';
import ColorSystem from '../../../../configs/color/ColorSystem';
import CText from '../../../atoms/CText';
import styleValues from '../../../utils/enums/styleValues';
import { ISimpleTab } from '../ISimpleTab';

export default ({ list, select, selectedIndex }: { list: ISimpleTab[]; select: (index: number) => void; selectedIndex: number }) => {
  return (
    <View style={defStyle.main}>
      {list.map((item, index) => (
        <CText
          text={item.name}
          style={[defStyle.item, list[selectedIndex] === item ? { color: ColorSystem.BrandColor } : {}]}
          events={{
            onPress() {
              select(index);
            },
          }}
        />
      ))}
    </View>
  );
};
const defStyle = StyleSheet.create({
  main: { flexDirection: 'row' },
  item: { flex: 1, textAlign: 'center', textAlignVertical: 'center', paddingVertical: styleValues.paddin05 },
});
