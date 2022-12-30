import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import mt, { labels } from '../../../../translation/lang/basics/ILangValuesEnum';
import Btn from './Btn';

export default ({ press, inRes }: { press: (isIn: boolean) => void; inRes: boolean }) => {
  const [isInrest, set_isInrest] = useState(true);
  return (
    <View style={defStyle.baseView}>
      <Btn
        text={mt(labels.inResturent)}
        press={() => {
          press(true);
          set_isInrest(true);
        }}
        selected={inRes}
      />
      <View style={defStyle.gap} />
      <Btn
        text={mt(labels.delivery)}
        press={() => {
          press(false);
          set_isInrest(false);
        }}
        selected={!inRes}
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
