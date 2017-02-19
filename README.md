[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/MacKentoch/react-native-ibeacons)

# react-native-ibeacons

![logo](./images/RN-iBeacon.png)

## Install (iOS and Android)

> Ensure to have NodeJS >= v6.x.
>
> You must run on **real devices** (*don't forget to active Bluetooth when running*).

**Mobile Version compatibility:**

> - **iOS** `minimum version`
>   -  8.0
> - **Android** `minimum version`
>   - 21 (*alias LOLLIPOP*)


### 1. get
*via npm:*
```javascript:
npm install react-native-ibeacons
```
*or via yarn:*
```javascript:
yarn install react-native-ibeacons
```
### 2. link

```javascript
react-native link react-native-ibeacons
```
### 3.a specific to iOS

> IMPORTANT: you have to set `Bluetooth` and `localization service` in background Modes
<!--  -->
![ios: active background mode](./images/bgmode.gif)


### 3.b specific to Android

Nothing (lucky Android :smile:).


## usage

```javascript
var React = require('react-native');
var {DeviceEventEmitter} = React;

var Beacons = require('react-native-ibeacon');

// Define a region which can be identifier + uuid,
// identifier + uuid + major or identifier + uuid + major + minor
// (minor and major properties are numbers)
var region = {
    identifier: 'Estimotes',
    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
};

// Request for authorization while the app is open
Beacons.requestWhenInUseAuthorization();

Beacons.startMonitoringForRegion(region);
Beacons.startRangingBeaconsInRegion(region);

Beacons.startUpdatingLocation();

// Listen for beacon changes
var subscription = DeviceEventEmitter.addListener(
  'beaconsDidRange',
  (data) => {
    // data.region - The current region
    // data.region.identifier
    // data.region.uuid

    // data.beacons - Array of all beacons inside a region
    //  in the following structure:
    //    .uuid
    //    .major - The major version of a beacon
    //    .minor - The minor version of a beacon
    //    .rssi - Signal strength: RSSI value (between -100 and 0)
    //    .proximity - Proximity value, can either be "unknown", "far", "near" or "immediate"
    //    .accuracy - The accuracy of a beacon
  }
);
```

## license
The MIT License (MIT)

Copyright (c) 2017 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
