import { StyleSheet, View } from 'react-native';
import CGap from '../../../../../components/atoms/CGap';
import CSeprator from '../../../../../components/atoms/CSeprator';
import Amount from './amount';
import Head from './head';
import OrderTable from './orderTable';
import PaymentMethod from './paymentMethod';
import PriceDetails from './priceDetails';

export default () => {
  // TODO
  return (
    <View style={defStyle.main}>
      <Head num="3" typ="First Floor" />
      <CGap vertical thick={5} />
      <OrderTable num="3" typ="First Floor" />
      <CSeprator margV={2} />
      <PriceDetails Discount="" Subtotal="" Tax="" Total="" />
      <CSeprator margV={2} />
      <PaymentMethod />
      <CSeprator margV={2} />

      <Amount Amount={'0.00'} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
});
