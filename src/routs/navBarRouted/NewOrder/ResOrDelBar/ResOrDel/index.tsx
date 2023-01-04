import { StyleSheet, View } from 'react-native';
import mt, { labels } from '../../../../../translation/lang/basics/ILangValuesEnum';
import { useGlobalContext } from '../../context';
import Btn from './Btn';

export default () => {
  const { inRest, setInRest } = useGlobalContext();
  return (
    <View style={defStyle.baseView}>
      <Btn
        text={mt(labels.inResturent)}
        press={() => {
          setInRest(true);
        }}
        selected={inRest}
      />
      <View style={defStyle.gap} />
      <Btn
        text={mt(labels.delivery)}
        press={() => {
          setInRest(false);
        }}
        selected={!inRest}
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
