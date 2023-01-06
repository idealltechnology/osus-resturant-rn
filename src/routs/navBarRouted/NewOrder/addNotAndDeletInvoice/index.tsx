import React from 'react';
import { StyleSheet, View } from 'react-native';
import CGap from '../../../../components/atoms/CGap/inex';
import AddNote from './addNote';
import DeletInvoice from './deletInvoice';

export default () => {
  return (
    <View style={defStyl.main}>
      <AddNote />
      <CGap thick={2} />
      <DeletInvoice />
    </View>
  );
};
const defStyl = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
