import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default () => {
  return <Image resizeMode="center" style={defStyle.main} source={require('../../../../../assets/Images/avatar.jpg')} />;
};
const defStyle = StyleSheet.create({
  main: { width: wp(4), height: wp(4) },
});
