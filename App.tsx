/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Registration from './src/screens/registration/Registration';
import AppNavigation from './src/navigation/AppNavigation';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: 'transparent',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
    <AppNavigation />
    </SafeAreaView>
  );
}

export default App;
