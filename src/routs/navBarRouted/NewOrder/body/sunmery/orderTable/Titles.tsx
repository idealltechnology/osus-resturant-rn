import { View } from 'react-native';
import mt, { labels } from '../../../../../../translation/lang/basics/ILangValuesEnum';
import { CText } from './../../../../../../components/atoms/Ctext/index';
import style from './item/style';
const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];

export default () => {
  return (
    <View style={style.main}>
      <View style={[style.inCommon, style.productName]}>
        <CText style={style.txt} text={mt(labels.productName)} />
      </View>
      <View style={[style.inCommon, style.quantity]}>
        <CText style={style.txt} text={mt(labels.quantity)} />
      </View>
      <View style={[style.inCommon, style.price]}>
        <CText style={style.txt} text={mt(labels.price)} />
      </View>
      <View style={[style.inCommon, style.discount]}>
        <CText style={style.txt} text={mt(labels.discount)} />
      </View>
      <View style={[style.inCommon, style.total]}>
        <CText style={style.txt} text={mt(labels.total)} />
      </View>
      <View style={[style.inCommon, style.action]}>
        <CText style={style.txt} text={mt(labels.action)} />
      </View>
    </View>
  );
};
