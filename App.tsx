import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import {AppProvider} from './src/context/AppContext';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#fff',
  };

  return (
    <AppProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
