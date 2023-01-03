import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styleValues from '../../../../../../../components/utils/enums/styleValues';
import { IFood } from '../../intefaces/IFood';
import Code from './particals/Code';
import Image from './particals/Image';
import Name from './particals/Name';
import Price from './particals/Price';

export default ({ code, image, name, price }: IFood) => {
  return (
    <View style={[defStyle.baseView]}>
      <Code text={code} style={[defStyle.common, defStyle.code]} />
      <Image url="" style={[defStyle.image]} />
      <Name text={name} style={[defStyle.common, defStyle.name]} />
      <Price text={price} style={[defStyle.common, defStyle.price]} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    padding: styleValues.paddin01,
    flexDirection: 'column',
    width: wp(13.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  common: { textAlign: 'center', width: '100%', marginVertical: styleValues.paddin01 },
  code: { textAlign: 'justify' },
  image: { width: wp(10), height: wp(10) },
  name: {},
  price: {},
});
