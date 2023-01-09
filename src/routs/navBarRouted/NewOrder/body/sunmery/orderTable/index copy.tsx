import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cell, Table, TableWrapper } from 'react-native-table-component';
import Titles from './Titles';

const tableData = [
  ['1', '2', '3', '4'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['a', 'b', 'c', 'd'],
  // ['1', '2', '3', '9'],
  // ['a', 'b', 'c', 'd'],
];

export default ({ num, typ }: { num: string; typ: string }) => {
  function _alertIndex(index: any) {
    Alert.alert(`This is row ${index + 1}`);
  }
  const element = (data: any, index: any) => (
    <TouchableOpacity onPress={() => _alertIndex(index)}>
      <View style={defStyle.btn}>
        <Text style={defStyle.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Table borderStyle={{ borderRadius: 50, borderWidth: 1 }}>
      <Titles />
      {tableData.map((rowData, index) => (
        <TableWrapper key={index} style={defStyle.row}>
          {rowData.map((cellData, cellIndex) => (
            <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={defStyle.text} />
          ))}
        </TableWrapper>
      ))}
    </Table>
  );
};

const defStyle = StyleSheet.create({
  text: { margin: 6, justifyContent: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
});
