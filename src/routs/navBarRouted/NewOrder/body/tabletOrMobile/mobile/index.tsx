import { useState } from 'react';
import CText from '../../../../../../components/atoms/CText';
import SwipeableTabs from '../../../../../../components/organisms/react-native-swipe-tabs';
import FoodSelector from '../../FoodSelector';
import TableOrInvoicer from '../../tableOrInvoicer';

export default () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    // <View style={{ flex: 1, width: '100%', borderWidth: 1, overflow: 'hidden' }}>
    <SwipeableTabs onSwipe={(x) => setSelectedIndex(x)} selectedIndex={selectedIndex} labels={['table', 'foods', 'summery']}>
      <TableOrInvoicer />
      <FoodSelector />
      <CText text="sum" />
    </SwipeableTabs>
    // </View>
  );
};
