import { Image, StyleProp, ViewStyle, View } from 'react-native';

export default ({ url, style }: { url: string; style?: StyleProp<ViewStyle> | undefined }) => {
  return (
    <View style={style}>
      <Image source={require('../../../../../../../../assets/Images/pizza.jpg')} resizeMode="center" style={{ height: '100%', width: '100%' }} />
    </View>
  );
};
