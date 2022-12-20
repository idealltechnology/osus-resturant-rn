import React, { useState, useRef, useEffect, useImperativeHandle, FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import ColorSystem from '../../../Configs/Color/ColorSystem';
import BaseView from '../../Components/BaseView';
import styleValues from '../InterfaceStyles/styleValues';
import { IModal } from '../interfacesUI/IModal';
import CHeader from '../../Components/CHeader';
import mrvTxtTest from '../../../Utilities/mrvTxtTest';
import testStyles from '../InterfaceStyles/testStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CText from './CText';
import CLoading from './CLoading';

export const CModal: FC<IModal> = React.forwardRef(({ children, form, _iHeader, fullScreen, events, backDropDontClose, style }, ref) => {
  const cLoadingRef = useRef<any>();

  const [showModal, setShowModal] = useState(false);
  _iHeader = {
    ..._iHeader,
    _IHeaderDefault: {
      ..._iHeader?._IHeaderDefault,
      iconEndEvent: {
        ..._iHeader?._IHeaderDefault?.iconEndEvent,
        onPress: () => {
          setShowModal(false);
        },
      },
    },
  };

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
        backDropDontClose || fullScreen ? null : setShowModal(false);
      }}
      isVisible={showModal}
      style={[StyleModal.default, fullScreen ? StyleModal.fulScreen : StyleModal.normal, style]}
    >
      <CLoading ref={cLoadingRef} />
    </Modal>
  );
});

CModal.displayName = 'CModal';

export default CModal;

const StyleModal = StyleSheet.create({
  default: {
    backgroundColor: ColorSystem.White,

    alignSelf: 'center',
  },
  normal: {
    borderRadius: styleValues.radius10,
    marginVertical: hp(20),
    width: wp(80),
  },
  fulScreen: { width: '100%', height: '100%', margin: 0 },
});
