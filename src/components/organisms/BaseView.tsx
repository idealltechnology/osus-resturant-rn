import { View } from 'native-base';
import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import isTablet from '../../utilities/isTablet';
import styleValues from '../utils/enums/styleValues';
import testStyles from '../utils/enums/testStyles';
import { IBaseView } from '../utils/interfacesUI/IBaseView';
import CHeader from './CHeaader';
import CNavigatonBar from './CNavigatonBar';

const BaseView: FC<IBaseView> = React.forwardRef(({ children, header, navBar, style }, ref) => {
  const isTblt = isTablet();
  const navigatonBar = () => (
    <>
      {navBar && (
        <View style={defStyl.nav}>
          <CNavigatonBar {...header!} />
        </View>
      )}
    </>
  );
  return (
    <SafeAreaView>
      <View style={[defStyl.container, defStyl.skeleton]}>
        {header && (
          <View style={defStyl.header}>
            <CHeader {...header} />
          </View>
        )}
        {isTblt && navigatonBar()}
        <View style={[defStyl.body, defStyl.skeleton, style]}>{children}</View>
        {!isTblt && navigatonBar()}
      </View>
    </SafeAreaView>
  );
});
export default BaseView;
const defStyl = StyleSheet.create({
  container: { height: '100%' },
  header: { flex: 1 },
  body: { flex: 10, padding: styleValues.paddin05 },
  nav: { flex: 1 },
  skeleton: !true ? testStyles.tstB : {},
});
