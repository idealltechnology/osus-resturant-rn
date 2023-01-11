import { StyleSheet, View } from 'react-native';
import CInputText from '../../../../../components/molecules/CInputText';
import Xml from '../../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../../configs/color/ColorSystem';
import mrvTxtTest from '../../../../../utilities/mrvTxtTest';
import Food from './Food';
import FoodCategory from './FoodCategory';
import Pager from '../../../../../components/organisms/pager';

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
      <FoodCategory
        select={(v) => {
          select && select();
          mrvTxtTest.TSTtoast('ss');
        }}
      />
      <Food select={(v) => {}} />
      <Pager page={1} pages={5} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: { flexDirection: 'column' },
  input: {},
});
