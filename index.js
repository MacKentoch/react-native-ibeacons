'use strict';

import { Platform } from 'react-native';
import RNiBeaconAndroid from './lib/index.android';
import RNiBeaconIOS from './lib/index.android';

function moduleSelector() {
  if (Platform.OS === 'android') {
      return RNiBeaconAndroid;
  }
  return RNiBeaconIOS;
}

const RNiBeaconsModule = moduleSelector();

export default RNiBeaconsModule;
