import { StyleSheet, View } from 'react-native';
import styleValues from '../../../../../components/utils/enums/styleValues';
import CommonStyles from '../../../../../configs/CommonStyles';
import { useGlobalContext } from '../../context';
import Invoicer from './Invoicer';
import TableSelector from './TableSelector';
import { Model } from './TableSelector/Tables/item/Model';

export default ({ select }: { select?: (item: Model) => void }) => {
  const { inRest } = useGlobalContext();

  return (
    <View style={[CommonStyles.card, defStyle.main]}>
      {inRest ? (
        <TableSelector
          select={(i) => {
            select && select(i);
          }}
        />
      ) : (
        <Invoicer />
      )}
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {
    marginVertical: styleValues.paddin05,
    padding: styleValues.paddin05,
  },
});
