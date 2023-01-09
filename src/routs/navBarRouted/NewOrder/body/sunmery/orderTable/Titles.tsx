import { StyleSheet, View } from 'react-native';
import { Row } from 'react-native-table-component';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import CGrayLabel from '../..//../../../../components/atoms/CGrayLabel';
import { CText } from './../../../../../../components/atoms/Ctext/index';
import style from './item/style';
const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];

export default () => {
  return (
    <View style={style.main}>
      <CText style={style.productName} text={'productName'} />
      <CGrayLabel style={style.quantity} text={'quantity'} />
      <CGrayLabel style={style.price} text={'price'} />
      <CGrayLabel style={style.discount} text={'discount'} />
      <CText style={style.total} text={'total'} />
      <CText style={style.action} text={'action'} />
    </View>
  );
};
