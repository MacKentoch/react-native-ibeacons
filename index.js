'use strict';

import { Platform } from 'react-native';
import RNiBeaconAndroid from './module.android';
import RNiBeaconIOS from './module.ios';

function moduleSelector() {
  if (Platform.OS === 'android') {
      return RNiBeaconAndroid;
  }
  return RNiBeaconIOS;
}

const RNiBeaconsModule = moduleSelector();

export default RNiBeaconsModule;
