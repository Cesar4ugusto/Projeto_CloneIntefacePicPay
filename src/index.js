import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" hidden={false} translucent />
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
    </>
  );
}