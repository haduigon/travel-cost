/** eslint-disable */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsNavigation from './NewsNavigation';
import TravelsNavigation from './TravelsNavigation';
import ProfileNavigation from './ProfileNavigation';
import SettingsNavigation from './SettingsNavigation';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
// import Ionicons from '@react-native-vector-icons/ionicons';


const Tab = createBottomTabNavigator();

function AppNavigation(): React.JSX.Element {

  return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 16,
                color: 'red',
              },
            }}
          >
            <Tab.Screen
              name="News"
              component={NewsNavigation}
              options={{
                tabBarLabel: 'News',
              }}
            />
            <Tab.Screen
              name="Travels"
              component={TravelsNavigation}
              options={{
                tabBarLabel: 'Travels',
                tabBarIcon: () => <Ionicons name="plane" size={22} />,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileNavigation}
              options={{
                tabBarLabel: 'Profile',
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsNavigation}
              options={{
                tabBarLabel: 'Settings',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
  );
}

export default AppNavigation;
