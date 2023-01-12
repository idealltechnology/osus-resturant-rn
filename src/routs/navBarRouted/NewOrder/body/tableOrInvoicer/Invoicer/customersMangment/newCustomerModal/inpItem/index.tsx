import React from 'react';
import { StyleSheet, View } from 'react-native';
import styleValues from '../../../../../../../../../components/utils/enums/styleValues';
import { CInputText } from './../../../../../../../../../components/molecules/CInputText/index';

export default React.forwardRef(({ name }: { name: string }, ref) => {
  return (
    <View style={defStyle.main}>
      <CInputText
        title={{ text: { text: name } }}
        input={{
          placeHoldr: { text: `Enter ${name}` },
        }}
      />
    </View>
  );
});

const defStyle = StyleSheet.create({
  main: { marginVertical: styleValues.radius05 },
});
