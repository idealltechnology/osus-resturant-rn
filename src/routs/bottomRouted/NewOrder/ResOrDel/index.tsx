import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Btn from './Btn';
import Arabic from '../../../../translation/lang/Arabic';
import t, { labels } from '../../../../translation/lang/interface/ILangValuesEnum';
import mrvTxtTest from '../../../../utilities/mrvTxtTest';

export default ({ press }: { press: (isIn: boolean) => void }) => {
  // mrvTxtTest.copyJson(`${labels.labels}.${labels.delivery}`);
  const [isInrest, set_isInrest] = useState(true);
  return (
    <View style={defStyle.baseView}>
      <Btn
        text={t(labels, labels.inResturent)}
        press={() => {
          press(true);
          set_isInrest(true);
        }}
        selected={isInrest}
      />
      <Btn
        text={t(labels, labels.delivery)}
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
});
