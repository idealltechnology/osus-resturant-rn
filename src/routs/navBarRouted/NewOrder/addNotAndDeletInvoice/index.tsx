import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddNote from './addNote';
import DeletInvoice from './deletInvoice';

export default () => {
  return (
    <View style={defStyl.main}>
      <AddNote />
      <DeletInvoice />
    </View>
  );
};
const defStyl = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
});
