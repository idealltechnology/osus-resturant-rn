import { StyleSheet, View } from 'react-native';
import CSeprator from '../../../../../../components/atoms/CSeprator';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import Item from './item';
import { Model } from './Model';
export default ({ Discount, Subtotal, Tax, Total }: Model) => {
  return (
    <View style={defStyle.main}>
      <Item name={mt(labels.subtotal)} value={Subtotal.toString()} />
      <Item name={mt(labels.tax)} value={Tax.toString()} />
      <Item name={mt(labels.discount)} value={Discount.toString()} />
      <CSeprator margV={2} />
      <Item name={mt(labels.total)} value={Total.toString()} bold />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
});
