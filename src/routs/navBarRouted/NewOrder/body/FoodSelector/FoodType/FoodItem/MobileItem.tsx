import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IFood } from '../../intefaces/IFood';
import Code from './particals/Code';
import Image from './particals/Image';
import Name from './particals/Name';
import Price from './particals/Price';

export default ({ code, image, name, price }: IFood) => {
  return (
    <View style={[defStyle.baseView]}>
      <Code text={code} style={[defStyle.common, defStyle.code]} />
      <Image url="" style={[defStyle.common, defStyle.image]} />
      <Name text={name} style={[defStyle.common, defStyle.name]} />
      <Price text={price} style={[defStyle.common, defStyle.price]} />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {
    flexDirection: 'row',
    height: hp(7),
    alignItems: 'center',
  },
  common: { flex: 1, textAlign: 'center' },
  code: {},
  image: { width: hp(6), height: hp(6) },
  name: {},
  price: {},
});
