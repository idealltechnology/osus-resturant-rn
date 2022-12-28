import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { View } from 'native-base';
import React, { FC, useRef } from 'react';
import { FlatList, I18nManager, ListRenderItem, SafeAreaView, StyleSheet } from 'react-native';
import userLanguage from '../../../translation/lang/basics/userLanguage';
import CIconGenerator from '../../atoms/CIconGenerator';
import CSeprator from '../../atoms/CSeprator';
import CText from '../../atoms/CText';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import styleValues from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import CModal from '../CModal';
import { ILangView } from './item/ILangView';
import Langs from './item/Langs';
import RNRestart from 'react-native-restart';
import ColorSystem from '../../../configs/color/ColorSystem';

const LangChanger: FC = React.forwardRef(() => {
  const modalRef = useRef<any>();
  var setedLang: string | undefined = '';
  AsyncStorage.getItem(userLanguage).then((lang) => {
    setedLang = lang?.toString();
  });

  const foodCategoryItem: ListRenderItem<ILangView> = ({ item }) => {
    var isSel: boolean = item.value === setedLang;
    return (
      <CText
        text={item.name}
        style={[defStyle.item, isSel && { backgroundColor: ColorSystem.gray!(10) }]}
        events={{
          onPress() {
            if (isSel) {
              modalRef.current.setShowModal(false);
              return;
            }

            i18next.changeLanguage('item.code', () => {
              AsyncStorage.setItem(userLanguage, item.value)
                .then(() => {
                  I18nManager.forceRTL(item.rtl);
                  RNRestart.Restart();
                })
                .catch((e) => {
                  console.log('\n\n\n\n e', e);
                });
            });
          },
        }}
      />
    );
  };
  return (
    <View style={defStyle.container}>
      <CIconGenerator
        events={{
          onPress() {
            modalRef.current.setShowModal(true);
          },
        }}
        iconName={Xml.lang()}
      />
      <CModal screenMode="bottom" ref={modalRef}>
        <View style={defStyle.flatList}>
          <FlatList data={Langs} renderItem={foodCategoryItem} keyExtractor={(item, index) => index.toString()} ItemSeparatorComponent={() => <CSeprator />} />
        </View>
      </CModal>
    </View>
  );
});
export default LangChanger;
const defStyle = StyleSheet.create({
  container: { justifyContent: 'center' },
  flatList: {},
  item: { textAlign: 'center', textAlignVertical: 'center', padding: styleValues.paddin04, fontSize: EnumFontSize.h2, fontWeight: 'bold' },
});
