import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import BaseView from '../../../components/organisms/BaseView';
import Body from './body';
import Invoicer from './Invoicer';
import ResDelBar from './ResDelBar';

export default () => {
  const [isInrest, set_isInret] = useState(true);

  return (
    <BaseView header={{ navigation: useNavigation() }} navBar={{ navigation: useNavigation() }}>
      <ResDelBar inRes={isInrest} press={set_isInret} />
      {isInrest ? <></> : <Invoicer />}
      <Body />
    </BaseView>
  );
};
