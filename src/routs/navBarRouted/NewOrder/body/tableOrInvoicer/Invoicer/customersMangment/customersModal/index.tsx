import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from 'react-native';
import CModal from '../../../../../../../../components/organisms/CModal';
import styleValues from '../../../../../../../../components/utils/enums/styleValues';
import isTablet from '../../../../../../../../utilities/isTablet';
import MobileModal from './MobileModal';
import TabletModal from './TabletModal';
// import Header from './header';

export default React.forwardRef(({}, ref) => {
  const moalRef = useRef<any>();
  useImperativeHandle(ref, () => {
    return {
      showModal,
    };
  });

  useEffect(() => {
    moalRef.current.setShowModal(true);
  }, []);

  const showModal = () => {
    moalRef.current.setShowModal(true);
  };

  return (
    <CModal ref={moalRef} style={defStyle.modal} screenMode={isTablet() ? 'alert' : undefined}>
      <TabletModal />
    </CModal>
  );
});

const defStyle = StyleSheet.create({
  modal: {
    marginVertical: isTablet() ? styleValues.paddin10 : styleValues.paddin05,
    borderRadius: styleValues.paddin03,
    padding: styleValues.paddin02,
  },
  main: {
    padding: styleValues.paddin01,
    flex: 1,
    borderWidth: 1,
  },
  head: {
    flexDirection: 'row',
  },
  btn: { flex: 2, marginHorizontal: styleValues.paddin01 },
  title: { flex: 3, textAlign: 'left' },
});
