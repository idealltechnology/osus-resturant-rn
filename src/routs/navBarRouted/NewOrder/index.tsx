import { useNavigation } from '@react-navigation/native';
import BaseView from '../../../components/organisms/BaseView';
import Body from './body';
import MyGlobalContextProvider from './context/MyGlobalContextProvider';
import ResDelBar from './ResOrDelBar';

export default () => {
  return (
    <MyGlobalContextProvider>
      <BaseView header={{ navigation: useNavigation() }} navBar={{ navigation: useNavigation() }}>
        <ResDelBar />
        <Body />
      </BaseView>
    </MyGlobalContextProvider>
  );
};
