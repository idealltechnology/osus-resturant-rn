import { ScrollView } from 'native-base';
import { StyleSheet, View } from 'react-native';
import CTabletCulomn from '../../../../../../components/organisms/CTabletCulomn';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import CommonStyles from '../../../../../../configs/CommonStyles';
import FoodSelector from '../../FoodSelector';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
  return (
    <ScrollView>
      <TableOrInvoicer />
      <CTabletCulomn
        start={
          <View style={[CommonStyles.card, defStyle.main]}>
            <FoodSelector />
          </View>
        }
        end={<View style={[CommonStyles.card, defStyle.main]}></View>}
      />
    </ScrollView>
  );
};

const defStyle = StyleSheet.create({
  main: {
    padding: styleValues.paddin05,
  },
});
