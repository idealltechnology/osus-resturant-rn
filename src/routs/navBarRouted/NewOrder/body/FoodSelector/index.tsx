import { StyleSheet, View } from 'react-native';
import CInputText from '../../../../../components/molecules/CInputText';
import Xml from '../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import mrvTxtTest from '../../../../../utilities/mrvTxtTest';
import FoodType from './FoodType';

export default ({ select }: { select?: () => void }) => {
  return (
    <View style={defStyle.baseView}>
      <CInputText
        startIcon={{
          iconName: Xml.magnifier,
          color: ColorSystem.gray!(20),
        }}
        input={{ placeHoldr: { text: 'search', color: ColorSystem.gray!(20) } }}
        style={defStyle.input}
      />
      <FoodType
        select={(v) => {
          select && select();
          mrvTxtTest.TSTtoast('ss');
        }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'column', flex: 1 },
  input: {},
});
