import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CInputText from '../../../../components/molecules/CInputText';
import Xml from '../../../../components/utils/svgs/Xml';
import ColorSystem from '../../../../configs/color/ColorSystem';
import mrvTxtTest from '../../../../utilities/mrvTxtTest';
import FoodType from './FoodType';

export default () => {
  return (
    <View style={defStyle.inDelView}>
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
          mrvTxtTest.TSTtoast('ss');
        }}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {},
  inDelView: { flexDirection: 'column' },
  input: {
    marginTop: heightPercentageToDP(3),
  },
});
