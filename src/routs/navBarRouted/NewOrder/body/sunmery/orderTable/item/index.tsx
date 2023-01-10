import { StyleSheet, View } from 'react-native';
import { EnumFontSize } from '../../../../../../../components/utils/enums/EnumFontSize';
import CGrayLabel from '../../../../../../../components/atoms/CGrayLabel';
import { CText } from '../../../../../../../components/atoms/Ctext/index';
import { Model } from './Model';
import style from './style';
import NumPickInput from './numPickInput';
export default ({ action, discount, price, productName, quantity, total }: Model) => {
  return (
    <View style={style.main}>
      <View style={[style.inCommon, style.productName]}>
        <CText style={style.txt} text={productName} />
      </View>
      <View style={[style.inCommon, style.quantity]}>
        <NumPickInput />
      </View>
      <View style={[style.inCommon, style.price]}>
        <NumPickInput />
      </View>
      <View style={[style.inCommon, style.discount]}>
        <NumPickInput />
      </View>
      <View style={[style.inCommon, style.total]}>
        <CText style={style.txt} text={total} />
      </View>
      <View style={[style.inCommon, style.action]}>
        <CText style={style.txt} text={action} />
      </View>
    </View>
  );
};
