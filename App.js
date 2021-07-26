/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearchScreen />
    </>
  );
};

export default App;
