import { StyleSheet } from 'react-native';
import CText from '../../../../../../../../components/atoms/CText';
import { IText } from '../../../../../../../../components/utils/interfacesUI/IText';

export default (props: IText) => {
  return <CText {...props} />;
};

const defStyle = StyleSheet.create({
  def: {},
});
