/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  // Text,
  // useColorScheme,
  View,
} from 'react-native';
import {
  // Colors,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Registration from './src/screens/registration/Registration';

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

        {/* <Text>jofvigb</Text> */}
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 20,
                color: 'red',
              },
            }}
          >
            <Tab.Screen
              name="News"
              component={Registration}
              options={{
                tabBarLabel: 'News',
              }}
            />
            <Tab.Screen
              name="News2"
              component={Registration}
              options={{
                tabBarLabel: 'News2',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>

    </SafeAreaView>
  );
}


export default App;
