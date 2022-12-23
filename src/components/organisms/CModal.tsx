import React, { useState, useRef, useEffect, useImperativeHandle, FC } from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ColorSystem from '../../configs/color/ColorSystem';
import styleValues from '../utils/InterfaceStyles/styleValues';
import { IModal } from '../utils/interfacesUI/IModal';

export const CModal: FC<IModal> = React.forwardRef(({ children, form, _iHeader, screenMode, events, backDropDontClose, style }, ref) => {
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
      {/* <CLoading ref={cLoadingRef} /> */}
      <>{children}</>
    </Modal>
  );
});

CModal.displayName = 'CModal';

export default CModal;

const defStyl = StyleSheet.create({
  default: {
    backgroundColor: ColorSystem.White,

    alignSelf: 'center',
  },
  normal: {
    borderRadius: styleValues.radius10,
    marginVertical: hp(20),
    width: wp(80),
  },
  bottom: { width: '100%', marginTop: hp(77), marginBottom: 0 },
  fulScreen: { width: '100%', height: '100%', margin: 0 },
});

function styleDetecter(params?: 'fullScreen' | 'bottom') {
  switch (params) {
    case 'bottom':
      return defStyl.bottom;
    case 'fullScreen':
      return defStyl.fulScreen;
    default:
      return defStyl.normal;
  }
}
