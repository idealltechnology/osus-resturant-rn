import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CGap from '../../../../../../components/atoms/CGap';
import CText from '../../../../../../components/atoms/Ctext';
import { EnumFontSize } from '../../../../../../components/utils/enums/EnumFontSize';
import styleValues from '../../../../../../components/utils/enums/styleValues';
import Xml from './../../../../../../components/utils/svgs/Xml';
import Item from './item';
import { Model } from './Model';
export default ({}: Partial<Model>) => {
  const [seldId, set_seldId] = useState(1);
  return (
    <View>
      <CText text={'Payment Method'} style={defStyle.title} />
      <View style={defStyle.row}>
        <Item
          id={1}
          selected={seldId}
          btn={{
            iText: { text: 'Cahs' },
            iIconSvg: { iconName: Xml.cash, size: 8 },
            iButtonContainer: {
              color: '',
              events: {
                onPress() {
                  set_seldId(1);
                },
              },
            },
          }}
        />

        <CGap thick={styleValues.paddin05} />
        <Item
          id={2}
          selected={seldId}
          btn={{
            iText: { text: 'Cahs' },
            iIconSvg: { iconName: Xml.credit },
            iButtonContainer: {
              color: '',
              events: {
                onPress() {
                  set_seldId(2);
                },
              },
            },
          }}
        />
      </View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: {},
  row: { flexDirection: 'row' },
  title: { textAlign: 'justify', fontSize: EnumFontSize.h4 },
});
