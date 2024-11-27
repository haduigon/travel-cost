/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Registration from '../screens/registration/Registration';

const Tab = createBottomTabNavigator();

function AppNavigation(): React.JSX.Element {

  return (
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
              name="Travels"
              component={Registration}
              options={{
                tabBarLabel: 'Travels',
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Registration}
              options={{
                tabBarLabel: 'Profile',
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Registration}
              options={{
                tabBarLabel: 'Settings',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

export default AppNavigation;
