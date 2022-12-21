import React, { useEffect, FC, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Btn from './Btn';
import { t } from 'i18next';
import mrvTxtTest from '../../../../utilities/mrvTxtTest';
export default ({ press }: { press: (isIn: boolean) => void }) => {
  const [isInrest, set_isInrest] = useState(true);
  // console.log("t('common.skip')", t('common.skip'));
  mrvTxtTest.TSTtoast(t('common.skip'));
  return (
    <View style={defStyle.baseView}>
      <Btn
        text={t('common.skip')}
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
  baseView: { flexDirection: 'row', justifyContent: 'space-between' },
});
