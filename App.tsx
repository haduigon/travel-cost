/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

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
