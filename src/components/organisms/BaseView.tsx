import { View } from 'native-base';
import React, { FC } from 'react';
import { I18nManager, SafeAreaView, StyleSheet } from 'react-native';
import styleValues from '../utils/InterfaceStyles/styleValues';
import testStyles from '../utils/InterfaceStyles/testStyles';
import { IBaseView } from '../utils/interfacesUI/IBaseView';
import CHeader from './CHeader';

const BaseView: FC<IBaseView> = React.forwardRef(({ children, nav, _IFooter: footer, style }, ref) => {
  return (
    <SafeAreaView>
      <View
        style={[
          // styles.tstR,
          stl.container,
          stl.skeleton,
        ]}
      >
        {nav && (
          <View style={stl.header}>
            <CHeader nav={nav} />
          </View>
        )}

        <View style={[stl.body, stl.skeleton, style]}>{children}</View>
      </View>
    </SafeAreaView>
  );
});
export default BaseView;
const stl = StyleSheet.create({
  container: { height: '100%' },
  header: { flex: 1 },
  body: { flex: 10, padding: styleValues.paddin05 },
  footer: { flex: 1 },
  skeleton: !true ? testStyles.tstB : {},
});
