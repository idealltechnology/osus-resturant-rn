import { StyleSheet, View } from 'react-native';
import CSeprator from '../../../../../../components/atoms/CSeprator';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import Item from './item';
import { Model } from './Model';
export default ({ Discount, Subtotal, Tax, Total }: Model) => {
  return (
    <View style={defStyle.main}>
      <Item name={'Subtotal'} value={Subtotal.toString()} />
      <Item name={'Tax (10%)'} value={Tax.toString()} />
      <Item name={'Discount'} value={Discount.toString()} />
      <CSeprator margV={2} />
      <Item name={'Total'} value={Total.toString()} bold />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
});
