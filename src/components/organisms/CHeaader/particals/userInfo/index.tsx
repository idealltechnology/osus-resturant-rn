import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import UserName from './UserName';
import HelloIcon from './HelloIcon';
import Avatar from './Avatar';

export default () => {
  return (
    <View style={defStyle.container}>
      <Avatar />
      <UserName name="Ali   " />
      <HelloIcon />
    </View>
  );
};

const defStyle = StyleSheet.create({
  container: { flexDirection: 'row' },
});
