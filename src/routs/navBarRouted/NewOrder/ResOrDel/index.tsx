import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Btn from './Btn';
import mt, { labels, routs } from '../../../../translation/lang/basics/ILangValuesEnum';
import mrvTxtTest from '../../../../utilities/mrvTxtTest';
import styleValues from '../../../../components/utils/enums/styleValues';

export default ({ press }: { press: (isIn: boolean) => void }) => {
  const [isInrest, set_isInrest] = useState(false);
  return (
    <View style={defStyle.baseView}>
      <Btn
        text={mt(labels.inResturent)}
        press={() => {
          press(true);
          set_isInrest(true);
        }}
        selected={isInrest}
      />
      <View style={defStyle.gap} />
      <Btn
        text={mt(routs.NewOrder)}
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
  baseView: { flexDirection: 'row', justifyContent: 'space-between' },
  gap: {
    flex: 1,
  },
});
