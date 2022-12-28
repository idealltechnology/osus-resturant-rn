import deviceInfoModule from 'react-native-device-info';

export default () => {
  return deviceInfoModule.isTablet();
};
