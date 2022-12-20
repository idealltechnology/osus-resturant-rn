import React, {useEffect, FC, useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import mrvTxtTest from '../../../../Utilities/mrvTxtTest';
import Btn from './Btn';

export default ({press}: {press: (isIn: boolean) => void}) => {
  const [isInrest, set_isInrest] = useState(true);

  return (
    <View style={defStyle.baseView}>
      <Btn
        text="In Resturent"
        press={() => {
          press(true);
          set_isInrest(true);
        }}
        selected={isInrest}
      />
      <Btn
        text="Delivery"
        press={() => {
          press(false);
          set_isInrest(false);
        }}
        selected={!isInrest}
      />
    </View>
  );
};

const defStyle = StyleSheet.create({
  baseView: {flexDirection: 'row', justifyContent: 'space-between'},
});
