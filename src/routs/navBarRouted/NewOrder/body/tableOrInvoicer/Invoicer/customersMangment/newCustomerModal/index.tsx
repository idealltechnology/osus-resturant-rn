import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from 'react-native';
import CModal from '../../../../../../../../components/organisms/CModal';
import styleValues from '../../../../../../../../components/utils/enums/styleValues';
import isTablet from '../../../../../../../../utilities/isTablet';
import Body from './Body';
// TODO
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
    <CModal ref={moalRef} style={defStyle.modal} name="NewCustomerModal">
      <Body />
    </CModal>
  );
});

const defStyle = StyleSheet.create({
  modal: {
    marginVertical: isTablet() ? styleValues.paddin10 : styleValues.paddin20,
    width: isTablet() ? '60%' : '80%',
    borderRadius: styleValues.paddin03,
    padding: styleValues.paddin02,
  },
});
