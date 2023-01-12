import { useState, useRef } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View, I18nManager } from 'react-native';
import CText from '../../atoms/Ctext';
import { CIconGenerator } from '../../atoms/CIconGenerator/inedx';
import Xml from '../../utils/svgs/Xml';
import mrvTxtTest from './../../../utilities/mrvTxtTest';
import styleValues from '../../utils/enums/styleValues';
import mt, { labels } from './../../../translation/lang/basics/ILangValuesEnum';

export default ({ page, pages }: { page: number; pages: number }) => {
  // const [page,setPage]=useState(1)
  return (
    <View style={defStyle.main}>
      <CText text={`${mt(labels.page)} ${page} ${mt(labels.from)} ${pages}`} style={defStyle.txt} />
      <View style={defStyle.main}>
        <CIconGenerator
          style={defStyle.icon}
          iconName={Xml.first}
          events={{
            onPress() {
              mrvTxtTest.TSTtoast('first');
            },
          }}
        />
        <CIconGenerator
          style={defStyle.icon}
          iconName={Xml.previous}
          events={{
            onPress() {
              mrvTxtTest.TSTtoast('priv');
            },
          }}
        />
        <CIconGenerator
          style={defStyle.icon}
          iconName={Xml.next}
          events={{
            onPress() {
              mrvTxtTest.TSTtoast('next');
            },
          }}
        />
        <CIconGenerator
          style={defStyle.icon}
          iconName={Xml.last}
          events={{
            onPress() {
              mrvTxtTest.TSTtoast('last');
            },
          }}
        />
      </View>
    </View>
  );
};

const defStyle = StyleSheet.create({
  main: { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' },
  txt: { flex: 1, textAlign: I18nManager.isRTL ? 'right' : 'left' },

  icon: {
    padding: styleValues.paddin01,
  },
});
