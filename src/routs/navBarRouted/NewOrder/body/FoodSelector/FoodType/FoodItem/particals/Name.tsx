import { StyleSheet } from 'react-native';
import CText from '../../../../../../../../components/atoms/Ctext';
import { IText } from '../../../../../../../../components/atoms/Ctext/IText';

export default (props: IText) => {
  return <CText {...props} />;
};

const defStyle = StyleSheet.create({
  def: {},
});
