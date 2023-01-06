import { ScrollView } from 'native-base';
import { StyleSheet, View } from 'react-native';
import CTabletCulomn from '../../../../../../components/organisms/CTabletCulomn';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import CommonStyles from '../../../../../../configs/CommonStyles';
import FoodSelector from '../../FoodSelector';
import Sunmery from '../../sunmery';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
  // TODO tablet order body
  return (
    <ScrollView>
      <View style={[CommonStyles.card, defStyle.TableOrInvoicer]}>
        <TableOrInvoicer />
      </View>
      <CTabletCulomn
        start={
          <View style={[CommonStyles.card, defStyle.main]}>
            <FoodSelector />
          </View>
        }
        end={
          <View style={[CommonStyles.card, defStyle.main]}>
            <Sunmery />
          </View>
        }
      />
    </ScrollView>
  );
};

const defStyle = StyleSheet.create({
  main: {
    padding: styleValues.paddin02,
  },
  TableOrInvoicer: {
    marginVertical: styleValues.paddin05,
  },
});
