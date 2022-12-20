import React, { useState, useRef, useEffect, useImperativeHandle, FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import ColorSystem from '../../../configs/color/ColorSystem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CText from '../atoms/CText';
import { IBottomDrawer } from '../interfacesUI/IBottomDrawer';
import { IText } from '../interfacesUI/IText';
import mrvTxtTest from '../../../Utilities/mrvTxtTest';
import styleValues from '../InterfaceStyles/styleValues';
import CSeprator from '../atoms/CSeprator';

export const CBottomDrrawer: FC<IBottomDrawer> = React.forwardRef(({ form, fullScreen, events, backDropDontClose, titlButton, isList, style }, ref) => {
  const cLoadingRef = useRef<any>();
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => {
    return { setShowModal, setIsloading };
  });

  useEffect(() => {
    // form?.widgets.push(title)
    // form?.widgets.splice(0, 0, title)
  }, []);

  const setIsloading = (isLoading: boolean) => {
    cLoadingRef.current.setIsloading(isLoading);
  };

  const _flatListItem: ListRenderItem<IText> = ({ index, item }) => <CText {...item} style={StyleModal.flatListItemStyle} />;

  return (
    <Modal
      onBackButtonPress={() => (events?.onBackButtonPress ? events.onBackButtonPress : setShowModal(false))}
      onBackdropPress={() => {
        backDropDontClose || fullScreen ? null : setShowModal(false);
      }}
      isVisible={showModal}
      style={[StyleModal.default]}
    >
      {/* <CLoading ref={cLoadingRef} /> */}
      <View style={[form!?.style, StyleModal.body, StyleModal.radius]}>
        <FlatList data={form?.widgets} renderItem={_flatListItem} ItemSeparatorComponent={() => <CSeprator />} />
      </View>
    </Modal>
  );
});

CBottomDrrawer.displayName = 'CModal';

export default CBottomDrrawer;
const topRadius = styleValues.radius10;
const StyleModal = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 1000,
    backgroundColor: '#fff',
  },
  default: { margin: 0 },
  radius: { borderTopRightRadius: topRadius, borderTopLeftRadius: topRadius },
  body: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: ColorSystem.White,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: styleValues.paddin02,
    borderBottomWidth: 1,
    borderBottomColor: ColorSystem.F_Gray!(30),
  },
  flatListItemStyle: {
    padding: styleValues.paddin01,
  },
});
