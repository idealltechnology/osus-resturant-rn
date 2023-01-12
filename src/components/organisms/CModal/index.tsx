import { View } from 'native-base';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ColorSystem from '../../../configs/color/ColorSystem';
import CIconGenerator from '../../atoms/CIconGenerator/inedx';
import CText from '../../atoms/Ctext';
import styleValues from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import { IModal } from './IModal';

export default React.forwardRef(({ children, name, screenMode, events, backDropDontClose, style }: IModal, ref) => {
  const cLoadingRef = useRef<any>();

  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => {
    return { setShowModal, setIsloading };
  });

  const setIsloading = (isLoading: boolean) => {
    cLoadingRef.current.setIsloading(isLoading);
  };

  return (
    <Modal
      onBackButtonPress={() => (events?.onBackButtonPress ? events.onBackButtonPress : setShowModal(false))}
      onBackdropPress={() => {
        backDropDontClose || screenMode === 'fullScreen' ? null : setShowModal(false);
      }}
      isVisible={showModal}
      style={[defStyl.default, styleDetecter(screenMode), style]}
    >
      <View style={defStyl.body}>
        {screenMode === undefined && (
          <View style={defStyl.header}>
            <CText text={name} />
            <CIconGenerator
              events={{
                onPress() {
                  setShowModal(false);
                },
              }}
              size={4}
              iconName={Xml.close()}
            />
          </View>
        )}
        <View style={defStyl.body}>{children}</View>
      </View>
    </Modal>
  );
});

const defStyl = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  default: {
    flexDirection: 'column',
    backgroundColor: ColorSystem.White,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
    // height: '100%',
  },
  normal: {
    borderRadius: styleValues.radius10,
    marginVertical: hp(20),
    width: wp(80),
  },
  bottom: { width: '100%', marginTop: hp(77), marginBottom: 0 },
  fulScreen: { width: '100%', height: '100%', margin: 0 },
  alert: {
    borderRadius: styleValues.radius03,

    marginVertical: hp(17),
    width: '80%',
  },
});

function styleDetecter(params?: 'fullScreen' | 'bottom' | 'alert') {
  switch (params) {
    case 'bottom':
      return defStyl.bottom;
    case 'fullScreen':
      return defStyl.fulScreen;

    case 'alert':
      return defStyl.alert;
    default:
      return defStyl.normal;
  }
}
