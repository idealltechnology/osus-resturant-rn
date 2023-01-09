import { StyleSheet, View } from 'react-native';
import { Row } from 'react-native-table-component';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import CGrayLabel from '../..//../../../../components/atoms/CGrayLabel';
import { CText } from './../../../../../../components/atoms/Ctext/index';
const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];

export default () => {
  return <Row data={tableHead} style={defStyle.head} textStyle={defStyle.text} />;
};

const defStyle = StyleSheet.create({
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, justifyContent: 'center' },
});
