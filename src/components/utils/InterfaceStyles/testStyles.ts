import { StyleSheet } from 'react-native';
import mrvTxtTest from '../../../utilities/mrvTxtTest';

export const testStyles = StyleSheet.create({
  tstB: mrvTxtTest.isTesting ? { borderColor: 'blue', borderWidth: 1 } : {},
  tstR: mrvTxtTest.isTesting ? { borderColor: 'red', borderWidth: 1 } : {},
  tstG: mrvTxtTest.isTesting ? { borderColor: 'green', borderWidth: 2 } : {},
  tstY: mrvTxtTest.isTesting ? { borderColor: 'orange', borderWidth: 2 } : {},
  tstP: mrvTxtTest.isTesting ? { borderColor: 'purple', borderWidth: 1 } : {},
  none: {},
});

export default testStyles;
