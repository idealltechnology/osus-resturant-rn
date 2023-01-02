import { ScrollView } from 'native-base';
import CTabletCulomn from '../../../../../../components/organisms/CTabletCulomn';
import FoodSelector from '../../FoodSelector';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
  return (
    <ScrollView>
      <TableOrInvoicer />
      <CTabletCulomn
        start={
          <>
            <FoodSelector />
          </>
        }
      />
    </ScrollView>
  );
};
